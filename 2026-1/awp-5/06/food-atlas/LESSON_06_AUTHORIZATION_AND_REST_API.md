# Food Atlas – Lab 06: Authorization in Laravel & REST API exposure

Teaching / lab guide for **Lecture 04 – Authentication and authorization**. Continues from [`SCHEMA_AND_AUTH_IMPLEMENTATION.md`](./SCHEMA_AND_AUTH_IMPLEMENTATION.md).

| Document | Focus |
|----------|--------|
| [`SCHEMA_AND_AUTH_IMPLEMENTATION.md`](./SCHEMA_AND_AUTH_IMPLEMENTATION.md) | **~Lab 05:** schema (N–N, enums), Breeze, `user_id`, roles, policies basics, `auth` middleware |
| **This guide (06)** | **Lab 06:** authentication vs authorization on the web; **Policies**, Blade `@can`, optional **Gates**; same rules on a **JSON API** with **Sanctum** |

---

## For instructors: how to run this lab (section order)

Teach in **this order** so each step builds on the last:

1. **Before you start** – vocabulary + prerequisites (5 min).  
2. **§1** – confirm `user_id` / model shape (or fix quickly).  
3. **§2** – show current `Route::resource` URLs.  
4. **§3** – wrap recipes/collections in `auth` (everyone sees: no guest CRUD).  
5. **§3.1** – *optional* in the same hour: public `index`/`show` + `auth` only on writes (pick **one** pattern for the group).  
6. **§4** – policies + `authorizeResource` + `user_id` on `store` → demo **403** on another user’s recipe.  
7. **§5** – Blade `@can` so UI matches policies.  
8. **§6** – Gate + `can` middleware (optional / short).  
9. **§7** – `UserPolicy` (homework or fast demo).  
10. **§8–§12** – API story: *why* → **Sanctum first** → `api.php` → `RecipeApiController` → `curl` / 401 vs 403.

End with **§13** (summary) and point to **homework / troubleshooting**.

---

## 45-minute lab – timeline

Use as a **live checklist**. If time is short, skip §6–§7 and make §8–§12 **instructor demo only**.

| Time (approx.) | Follow | Outcome |
|----------------|--------|---------|
| **0–5 min** | Before you start | Students distinguish **authentication** vs **authorization**. |
| **5–12 min** | §1–§3 | Logged-in only for recipe/collection CRUD (`auth` middleware). |
| **12–25 min** | §4 | `RecipePolicy` / `CollectionPolicy` + `authorizeResource`; **403** on wrong owner. |
| **25–32 min** | §5 | `@can` on `recipes/show` (and optionally `collections/show`). |
| **32–38 min** | §6 (optional) | One **Gate** + `@can('access-admin-panel')` **or** skip. |
| **38–45 min** | §8–§12 (or demo) | Sanctum + `GET/POST /api/recipes`; 401 without token, 403 when policy denies. |

**Minimum viable 45 minutes:** through **§5**. **Stretch:** §6–§7. **API:** live demo if students do not finish Sanctum install in time.

---

## Before you start

### Prerequisites (from Lab 05 / schema guide)

- [ ] Laravel Breeze (or equivalent) and working login  
- [ ] `user_id` on `recipes` and `collections`, `User` `hasMany` recipes/collections  
- [ ] (Recommended) `role` column + `User::isAdmin()` as in Part 2 of the schema guide  

If `user_id` is missing, add it or use a temporary policy: `return $recipe->user_id === $user->id` (no admin shortcut) until migrations catch up.

### Vocabulary (maps to the lecture slides)

| Term | Question it answers | In Laravel (this lab) |
|------|---------------------|------------------------|
| **Authentication** | Who is the user? | Breeze, session cookie, `auth` middleware |
| **Authorization** | Are they *allowed* to do this on *this* row? | **Policies**, `authorize()`, `@can`, optional **Gates** |
| **Token-based API** | Who is the user without a session? | **Sanctum** + `Authorization: Bearer …` |

**Three layers (say this explicitly in class):**

1. **Routing** – which URLs exist (`Route::resource`, `only` / `except`).  
2. **Middleware** – must you be logged in? (`auth`, `auth:sanctum`).  
3. **Policy** – may *this* user perform *this* action on *this* model? (`authorize`, `authorizeResource`).

**Lab goal:** enforce *“only the owner (or an admin) may update/delete this recipe”* on **web** and, in the API block, the **same** `RecipePolicy` for JSON—no copy-pasted `if` chains in controllers.

**What is a Gate?** A **named** global check (e.g. “may open admin panel”) registered with `Gate::define`. Use **policies** when the rule depends on a **specific model instance** (this `Recipe`).

**What is Sanctum?** Laravel’s package for **API authentication**: issues **personal access tokens** so clients send `Authorization: Bearer <token>` instead of a session cookie.

---

## 1. Code prerequisites: `Recipe` / `Collection` with owner

Policies below assume **`user_id`** is mass-assignable and the owner relation exists:

```php
// app/Models/Recipe.php (target shape after Lab 05)
protected $fillable = [
    'user_id',
    'title',
    'image',
    'description',
    'prep',
    'cook',
    'servings',
    'tags',
    'url',
];

public function user()
{
    return $this->belongsTo(User::class);
}
```

Mirror `user_id` + `user()` on **`Collection`** if you protect collections the same way.

---

## 2. Food Atlas routes (baseline)

The starter uses resource routing:

```php
// routes/web.php (typical)
Route::resource('recipes', RecipeController::class);
Route::resource('collections', CollectionController::class);
```

**Named routes:** `recipes.index`, `recipes.show`, `recipes.create`, `recipes.edit`, `recipes.update`, `recipes.destroy` (and `collections.*`).

**Route model binding:** `public function edit(Recipe $recipe)` resolves `{recipe}` from the URL.

Remove stray routes (e.g. `recipes-add`) that bypass REST naming.

---

## 3. Authentication on the web: `auth` middleware

**Goal:** guests cannot hit create / edit / POST / DELETE at all.

```php
// routes/web.php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\CollectionController;

Route::get('/', [LandingController::class, 'index'])->name('home');

Route::middleware(['auth'])->group(function () {
    Route::resource('recipes', RecipeController::class);
    Route::resource('collections', CollectionController::class);
});
```

**Teaching point:** `auth` answers **“logged in?”** It does **not** answer **“may I edit *this* recipe?”** — that is **§4**.

### 3.1 Tuning `Route::resource`: fewer actions, or public read + private write

`Route::resource()` registers seven actions: `index`, `create`, `store`, `show`, `edit`, `update`, `destroy`.

| Goal | Mechanism |
|------|-----------|
| **Some URLs should not exist** | `->only([...])` or `->except([...])` → missing methods return **404** |
| **Guests: browse; members: write** | One `Route::resource` **outside** `auth`, then in the controller: `$this->middleware('auth')->except(['index', 'show'])` |
| **May this user touch this row?** | **Policies** (§4) → **403** when denied |

Examples — **no route at all**:

```php
Route::resource('recipes', RecipeController::class)->only(['index', 'show']);
Route::resource('recipes', RecipeController::class)->except(['destroy']);
```

**Public index + show, rest requires login** (do **not** register the same resource twice; use controller middleware):

```php
// routes/web.php – no auth group around this line
Route::resource('recipes', RecipeController::class);
```

```php
// app/Http/Controllers/RecipeController.php
public function __construct()
{
    $this->middleware('auth')->except(['index', 'show']);
    $this->authorizeResource(Recipe::class, 'recipe');
}
```

- Guests: only `index` / `show` (make sure `index` does not call `auth()->user()` without `auth()->check()`).  
- Authenticated users still get **403** on another owner’s `edit`/`update`/`destroy` when the **policy** fails.

**Default for this lab:** keep **§3** as written (everything behind `auth`) unless you explicitly switch to the public-read pattern above.

---

## 4. Authorization: `RecipePolicy` & `CollectionPolicy`

### 4.1 Generate policies

```bash
php artisan make:policy RecipePolicy --model=Recipe
php artisan make:policy CollectionPolicy --model=Collection
```

Laravel auto-discovers `RecipePolicy` for `Recipe` when names follow the convention.

### 4.2 `RecipePolicy` (owner + admin)

Assume `User::isAdmin(): bool` exists (Lab 05).

```php
// app/Policies/RecipePolicy.php
namespace App\Policies;

use App\Models\Recipe;
use App\Models\User;

class RecipePolicy
{
    public function view(?User $user, Recipe $recipe): bool
    {
        return true; // tighten later for “private” recipes
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Recipe $recipe): bool
    {
        return $user->isAdmin() || $recipe->user_id === $user->id;
    }

    public function delete(User $user, Recipe $recipe): bool
    {
        return $user->isAdmin() || $recipe->user_id === $user->id;
    }
}
```

### 4.3 `CollectionPolicy` (same idea)

```php
// app/Policies/CollectionPolicy.php
namespace App\Policies;

use App\Models\Collection;
use App\Models\User;

class CollectionPolicy
{
    public function update(User $user, Collection $collection): bool
    {
        return $user->isAdmin() || $collection->user_id === $user->id;
    }

    public function delete(User $user, Collection $collection): bool
    {
        return $user->isAdmin() || $collection->user_id === $user->id;
    }
}
```

Add `view`, `create`, etc. if you use `authorizeResource` for every action.

### 4.4 `authorizeResource` in `RecipeController`

The route parameter name must be **`recipe`** (singular):

```php
// app/Http/Controllers/RecipeController.php
namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Recipe::class, 'recipe');
    }

    public function index()
    {
        $user = auth()->user();
        $recipes = $user?->isAdmin()
            ? Recipe::latest()->get()
            : Recipe::where('user_id', auth()->id())->latest()->get();

        return view('recipes.index', compact('recipes'));
    }

    // create, store, show, edit, update, destroy — policy runs where mapped
}
```

`authorizeResource` maps `edit` → `update`, `destroy` → `delete`, etc.

**Always set owner on create:**

```php
public function store(Request $request)
{
    $validated = $request->validate([
        'title'       => 'required|string|max:255',
        'image'       => 'nullable|url',
        'description' => 'required|string|max:500',
        'image_file'  => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        'prep'        => 'required|integer|min:0',
        'cook'        => 'required|integer|min:0',
        'servings'    => 'required|integer|min:0',
        'tags'        => 'required|string|max:255',
    ]);

    if ($request->hasFile('image_file')) {
        $path = $request->file('image_file')->store('recipes', 'public');
        $validated['image'] = '/storage/'.$path;
    }

    $validated['user_id'] = auth()->id();

    $recipe = Recipe::create($validated);

    return redirect()
        ->route('recipes.show', $recipe)
        ->with('success', 'Recipe created successfully');
}
```

Repeat for **`CollectionController`:** `authorizeResource(Collection::class, 'collection')` and `user_id` in `store`.

**Common mistake:** the second argument of `authorizeResource` must match `{collection}` / `{recipe}` in the URL.

---

## 5. Blade: hide actions with `@can`

`resources/views/recipes/show.blade.php` often shows Edit / Delete to everyone. Wrap them:

```blade
@can('update', $recipe)
  <a href="{{ route('recipes.edit', $recipe) }}" class="btn btn-outline btn-sm">
    Edit Recipe
  </a>
@endcan

@can('delete', $recipe)
  <form action="{{ route('recipes.destroy', $recipe) }}" method="POST" class="inline">
    @csrf
    @method('DELETE')
    <button type="submit" class="btn btn-error btn-sm">Delete Recipe</button>
  </form>
@endcan
```

**Teaching point:** `@can` is **UX only**. Policies in the controller remain mandatory.

Repeat on `resources/views/collections/show.blade.php` with `$collection`.

---

## 6. Optional: Gates & route `can` middleware

### 6.1 Gate — not tied to one model instance

Good for **global** abilities (e.g. admin area):

```php
// app/Providers/AppServiceProvider.php
use Illuminate\Support\Facades\Gate;
use App\Models\User;

public function boot(): void
{
    Gate::define('access-admin-panel', function (User $user) {
        return $user->isAdmin();
    });
}
```

```blade
{{-- e.g. resources/views/layout/nav.blade.php --}}
@can('access-admin-panel')
  <a href="{{ route('admin.dashboard') }}" class="btn btn-ghost btn-sm">Admin</a>
@endcan
```

(`admin.dashboard` can be homework.)

### 6.2 `can` middleware on a route

Same check as `authorize()` for one ability + model binding:

```php
Route::delete('/recipes/{recipe}', [RecipeController::class, 'destroy'])
    ->middleware(['auth', 'can:delete,recipe']);
```

Redundant if you already use `authorizeResource`, but useful to show the syntax.

---

## 7. Extension: `UserPolicy` (admin or self)

When you add a `users` resource: **admins** manage anyone; normal users only **view/update themselves**. Adjust `delete` / `create` to your rules.

```bash
php artisan make:policy UserPolicy --model=User
```

```php
// app/Policies/UserPolicy.php
namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    public function viewAny(User $auth): bool
    {
        return $auth->isAdmin();
    }

    public function view(User $auth, User $model): bool
    {
        return $auth->isAdmin() || $auth->id === $model->id;
    }

    public function create(User $auth): bool
    {
        return $auth->isAdmin();
    }

    public function update(User $auth, User $model): bool
    {
        return $auth->isAdmin() || $auth->id === $model->id;
    }

    public function delete(User $auth, User $model): bool
    {
        return $auth->isAdmin() && $auth->id !== $model->id;
    }
}
```

```php
// UserController (sketch)
public function __construct()
{
    $this->middleware('auth');
    $this->authorizeResource(User::class, 'user');
}
```

```php
Route::middleware(['auth'])->resource('users', UserController::class);
```

```blade
@can('update', $user)
  <a href="{{ route('users.edit', $user) }}">Edit profile</a>
@endcan
```

---

## 8. REST API: why a separate “exit”?

| Web (Blade) | API (JSON) |
|-------------|------------|
| `text/html`, redirects, session, `@csrf` | `application/json`, status codes, often **Bearer token** |
| `middleware('auth')` | `middleware('auth:sanctum')` (typical) |

Reuse **`RecipePolicy`** in an API controller via `$this->authorize(...)` so **one** rule set drives both channels.

---

## 9. Laravel Sanctum (install **before** protected API routes)

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

**`app/Models/User.php`:**

```php
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
}
```

**Create a token (lab / tinker):**

```php
$token = $user->createToken('lab-device')->plainTextToken;
// Client: Authorization: Bearer {token}
```

**Optional** `POST /api/login` for demos (lock down or remove in production):

```php
// routes/api.php (example)
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    return response()->json([
        'token' => $user->createToken('api')->plainTextToken,
    ]);
});
```

---

## 10. Register `routes/api.php` (Laravel 11+)

**`bootstrap/app.php`:**

```php
->withRouting(
    web: __DIR__.'/../routes/web.php',
    api: __DIR__.'/../routes/api.php',
    commands: __DIR__.'/../routes/console.php',
    health: '/up',
)
```

**`routes/api.php`:**

```php
<?php

use App\Http\Controllers\Api\RecipeApiController;
use Illuminate\Support\Facades\Route;

Route::get('/recipes', [RecipeApiController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/recipes', [RecipeApiController::class, 'store']);
    Route::put('/recipes/{recipe}', [RecipeApiController::class, 'update']);
    Route::delete('/recipes/{recipe}', [RecipeApiController::class, 'destroy']);
});
```

Default URL prefix: `/api` → e.g. `GET /api/recipes`.

---

## 11. `RecipeApiController` (Food Atlas fields + policies)

```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeApiController extends Controller
{
    public function index()
    {
        $recipes = Recipe::latest()->paginate(12);

        return response()->json($recipes);
    }

    public function store(Request $request)
    {
        $this->authorize('create', Recipe::class);

        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'image'       => 'nullable|url',
            'description' => 'required|string|max:500',
            'prep'        => 'required|integer|min:0',
            'cook'        => 'required|integer|min:0',
            'servings'    => 'required|integer|min:0',
            'tags'        => 'required|string|max:255',
        ]);

        $validated['user_id'] = $request->user()->id;

        $recipe = Recipe::create($validated);

        return response()->json($recipe, 201);
    }

    public function update(Request $request, Recipe $recipe)
    {
        $this->authorize('update', $recipe);

        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'image'       => 'nullable|url',
            'description' => 'required|string|max:500',
            'prep'        => 'required|integer|min:0',
            'cook'        => 'required|integer|min:0',
            'servings'    => 'required|integer|min:0',
            'tags'        => 'required|string|max:255',
        ]);

        $recipe->update($validated);

        return response()->json($recipe);
    }

    public function destroy(Recipe $recipe)
    {
        $this->authorize('delete', $recipe);

        $recipe->delete();

        return response()->json(null, 204);
    }
}
```

**Note:** skipping `image_file` on JSON is fine for a short lab; use `multipart` later if needed.

---

## 12. Testing the API: 401 vs 403

| Status | Meaning |
|--------|---------|
| **401** | Not authenticated — missing/invalid Bearer token |
| **403** | Authenticated — **policy** denied |

```http
GET /api/recipes
Accept: application/json
```

```http
POST /api/recipes
Authorization: Bearer YOUR_TOKEN_HERE
Accept: application/json
Content-Type: application/json

{"title":"Test","description":"API lab","prep":10,"cook":20,"servings":4,"tags":"demo"}
```

---

## 13. Summary tables

### Stack (web)

| Layer | Role | Typical tool |
|-------|------|----------------|
| Routes | Which URLs exist | `Route::resource`, `only` / `except` |
| Middleware | Logged in? | `auth` |
| Policy | Allowed on this model? | `RecipePolicy`, `authorizeResource`, `@can` |

### Web vs API

| | Web | API |
|---|-----|-----|
| Identity | Breeze session | Sanctum token |
| Must be logged in | `middleware('auth')` | `middleware('auth:sanctum')` |
| Row-level rules | `RecipePolicy` + `@can` | Same policy + `$this->authorize()` |
| Failure | redirect / 403 HTML | 401 / 403 JSON |

---

## Homework extensions

- Collections API + `CollectionPolicy`  
- `RecipeResource` + pagination metadata  
- `GET /api/recipes/{recipe}` with `view` policy  
- `Gate::before` super-admin (slides)  
- Harden or remove demo `POST /api/login`

---

## References

- Lecture: *Advanced web programming – Authentication and authorization*  
- Lab 05: [`SCHEMA_AND_AUTH_IMPLEMENTATION.md`](./SCHEMA_AND_AUTH_IMPLEMENTATION.md)  
- Laravel: [Authorization](https://laravel.com/docs/authorization), [Sanctum](https://laravel.com/docs/sanctum), [Eloquent API Resources](https://laravel.com/docs/eloquent-resources)

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|----------------|-----|
| 404 on `/api/...` | `api.php` not registered | §10 |
| Always 401 | Bad/missing `Authorization: Bearer` | §9 — token |
| 419 on web, API OK | CSRF expected on web | APIs do not use `@csrf` on JSON |
| Policy ignored on API | No `authorize()` / wrong guard | `auth:sanctum` + `$this->authorize()` |
| 403 on `authorizeResource` | Route param name | Second arg = `{recipe}` / `{collection}` |
