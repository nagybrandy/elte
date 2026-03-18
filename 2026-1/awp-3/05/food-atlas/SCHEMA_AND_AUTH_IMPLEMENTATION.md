# Food Atlas – Teaching Guide: Schema Changes and User Authentication

A comprehensive guide for instructors and students implementing database relationships, enums, and authentication in a Laravel application.

---

## For Instructors: How to Use This Guide

### Document Overview

This guide covers two major topics, each suitable for 1–2 lessons:

| Part | Topic | Suggested Duration | Key Concepts |
|------|-------|--------------------|--------------|
| **Part 1** | Database relationships & enums | 1–2 lessons | Many-to-many, pivot tables, PHP enums, migrations |
| **Part 2** | Authentication & authorization | 2–3 lessons | Laravel Breeze, policies, middleware, roles |

### Prerequisites for Students

Before starting, students should be familiar with:

- Basic Laravel: routes, controllers, models, Blade views
- Eloquent: `create`, `update`, `find`, basic relationships (`belongsTo`, `hasMany`)
- Migrations: creating and running migrations
- Forms: form submission, validation, `old()` for repopulation

### Suggested Lesson Flow

1. **Lesson 1.0:** Form validation – redirect back and preserve values (foundation for all forms)
2. **Lesson 1.1:** Many-to-many relationships (theory + pivot table)
3. **Lesson 1.2:** PHP enums and the cuisine field
4. **Lesson 2.1–2.4:** Laravel Breeze, user ownership, policies, authorization
5. **Lesson 2.5–2.6:** Admin role and middleware (optional)

---

## Part 1: Schema Changes (Collections, Recipes, Cuisine)

### Learning Objectives

By the end of Part 1, students will be able to:

- Explain when and why to use a many-to-many relationship
- Create and use a pivot table
- Define and use PHP backed enums
- Add enum fields to models and forms
- Run migrations safely and understand their order

---

### Lesson 1.0: Form Validation – Redirect Back and Preserve Values

#### Concept: What Happens When Validation Fails?

**Teaching point:** When a user submits a form with invalid data (e.g. missing required field, wrong format), we should:

1. **Redirect back** to the form page (not show a blank page or error dump)
2. **Show validation errors** so the user knows what to fix
3. **Keep the valid values** they already entered so they don’t have to retype everything

Laravel does this automatically when you use `$request->validate()` in the controller.

#### How It Works

**In the controller:** Call `validate()` with your rules. If validation fails, Laravel will:

- Automatically redirect back to the previous URL
- Flash the old input to the session
- Flash the validation errors to the session

```php
// RecipeController::store() or update()
$validated = $request->validate([
    'title' => 'required|string|max:255',
    'description' => 'required|string|max:500',
    'cuisine' => 'nullable|string|in:hungarian,italian,asian,mexican,french,indian,american,mediterranean,other',
    // ... more rules
]);

// If we reach here, validation passed. If not, Laravel already redirected.
Recipe::create($validated);
```

**In the Blade form:** Use `old()` to repopulate fields. Laravel provides `old('field_name')` with the previous value when redirecting after validation failure.

```blade
<input type="text" name="title" value="{{ old('title', $recipe->title ?? '') }}" />
<textarea name="description">{{ old('description', $recipe->description ?? '') }}</textarea>

<select name="cuisine" id="cuisine">
    <option value="">-- Select Cuisine --</option>
    @foreach(\App\Enums\Cuisine::cases() as $cuisine)
        <option value="{{ $cuisine->value }}" @selected(old('cuisine', $recipe->cuisine?->value ?? '') === $cuisine->value)>
            {{ $cuisine->label() }}
        </option>
    @endforeach
</select>
```

**Pattern:** `old('field_name', $model->field ?? '')` means: use the old submitted value if present (after validation failure), otherwise use the model value (when editing), otherwise use empty string.

#### Displaying Validation Errors

Laravel makes validation errors available in every view via the `$errors` variable (injected by the `ShareErrorsFromSession` middleware). You never need to pass it manually.

**Option 1: Show the error next to each field with `@error`**

Inside `@error('field_name')`, the `$message` variable holds the validation message for that field:

```blade
<div class="form-control">
    <label for="title">Recipe Title</label>
    <input type="text" name="title" id="title" value="{{ old('title', $recipe->title ?? '') }}" 
           class="input input-bordered @error('title') input-error @enderror" />
    @error('title')
        <p class="text-error text-sm mt-1">{{ $message }}</p>
    @enderror
</div>
```

- `@error('title')` – only renders if the `title` field has a validation error
- `{{ $message }}` – the actual error text (e.g. "The title field is required.")
- `@enderror` – closes the block

**Option 2: Show all errors at the top of the form**

```blade
@if ($errors->any())
    <div class="alert alert-error mb-4">
        <p class="font-semibold">Please fix the following errors:</p>
        <ul class="list-disc list-inside mt-2">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
```

- `$errors->any()` – true if any validation failed
- `$errors->all()` – array of all error messages
- `$errors->first('title')` – first error for a specific field
- `$errors->get('title')` – all errors for a specific field (array)

**Option 3: Combine both** – show a summary at the top and inline messages under each field. This gives the best UX.

**Where to put the error block:** Place the `@if ($errors->any())` block at the very top of your form, right after `<form ...>` and before the first input. That way users see the errors immediately when the page loads after a failed submit.

#### For the Cuisine Field Specifically

The cuisine select needs special handling because it uses an enum:

```blade
<select name="cuisine" id="cuisine" class="select select-bordered @error('cuisine') select-error @enderror">
    <option value="">-- Select Cuisine --</option>
    @foreach(\App\Enums\Cuisine::cases() as $cuisine)
        <option value="{{ $cuisine->value }}" @selected(old('cuisine', $recipe->cuisine?->value ?? '') === $cuisine->value)>
            {{ $cuisine->label() }}
        </option>
    @endforeach
</select>
@error('cuisine')
    <p class="text-error text-sm mt-1">{{ $message }}</p>
@enderror
```

**Teaching point:** `old('cuisine', $recipe->cuisine?->value ?? '')` ensures that after a validation error, the user’s previous selection (e.g. "italian") stays selected instead of resetting to "Select Cuisine".

#### Summary

| Step | Where | What to do |
|------|-------|------------|
| 1 | Controller | Use `$request->validate([...])` – Laravel redirects back automatically on failure |
| 2 | Blade | Use `old('field', $model->field ?? '')` for each input |
| 3 | Blade | Use `@error('field')` to display validation messages |

**Common mistake:** Forgetting `old()` in the form. After validation fails, the form will load empty and the user loses their input.

---

### Lesson 1.1: Collections–Recipes Many-to-Many Relationship

#### Concept: When Do We Need Many-to-Many?

**Teaching point:** Start with a real-world analogy.

- A recipe (e.g. "Carbonara") can appear in several collections: "Italian Classics", "Quick Dinners", "Pasta Lovers".
- A collection (e.g. "Italian Classics") can contain many recipes.
- This is a **many-to-many** relationship: many recipes ↔ many collections.

**Contrast with one-to-many:**

- One-to-many: one user has many recipes (each recipe belongs to one user).
- Many-to-many: one recipe can be in many collections, one collection can have many recipes.

#### Concept: The Pivot Table

**Teaching point:** A direct link between two tables is not enough. We need a third table that stores pairs of IDs.

| collection_id | recipe_id |
|---------------|-----------|
| 1             | 5         |
| 1             | 7         |
| 2             | 5         |

- Row 1: Collection 1 contains Recipe 5
- Row 2: Collection 1 contains Recipe 7
- Row 3: Collection 2 contains Recipe 5

So Recipe 5 is in both Collection 1 and Collection 2.

**Naming convention:** Pivot tables are often named alphabetically: `collection_recipe` (not `recipe_collection`). Laravel expects this when using `belongsToMany`.

#### Implementation: Migration

**What to teach:**

1. How to create a migration: `php artisan make:migration create_collection_recipe_table`
2. `foreignId()` creates a column and sets up a foreign key
3. `constrained()` links to the parent table
4. `cascadeOnDelete()` deletes pivot rows when the parent is deleted
5. `unique(['collection_id', 'recipe_id'])` prevents duplicate pairs

```php
// database/migrations/xxxx_create_collection_recipe_table.php
Schema::create('collection_recipe', function (Blueprint $table) {
    $table->id();
    $table->foreignId('collection_id')->constrained()->cascadeOnDelete();
    $table->foreignId('recipe_id')->constrained()->cascadeOnDelete();
    $table->timestamps();
    
    $table->unique(['collection_id', 'recipe_id']);
});
```

**Discussion question:** Why use `cascadeOnDelete()`? What happens if we don’t?

#### Implementation: Model Relationships

**Teaching point:** `belongsToMany` works through the pivot table. Laravel infers the pivot table name from the two model names.

**Recipe.php:**
```php
public function collections()
{
    return $this->belongsToMany(Collection::class, 'collection_recipe');
}
```

**Collection.php:**
```php
public function recipes()
{
    return $this->belongsToMany(Recipe::class, 'collection_recipe');
}
```

**Usage examples to show students:**

```php
// Get all collections for a recipe
$recipe->collections;

// Get all recipes in a collection
$collection->recipes;

// Attach a recipe to a collection
$collection->recipes()->attach($recipeId);

// Detach
$collection->recipes()->detach($recipeId);

// Sync (replace all): $collection->recipes()->sync([1, 2, 3]);
```

#### Controller and View Logic (What Students Will Build)

- **Recipe create/edit:** Multi-select or checkboxes to assign recipes to collections
- **Collection show:** List recipes in the collection
- **Collection edit:** Add/remove recipes from the collection

**Exercise:** Have students add a multi-select on the recipe edit form to choose which collections the recipe belongs to.

---

### Lesson 1.2: Cuisine Enum Field

#### Concept: What Is an Enum?

**Teaching point:** An enum is a fixed set of allowed values. Instead of free text like "italian" or "Italian", we define cases once and reuse them.

**Benefits:**

- Typo-proof: only valid values can be used
- IDE support and autocomplete
- Single place to change labels (e.g. for translation)
- Database stores the backing value (e.g. `"italian"`)

#### Concept: Backed Enums in PHP 8.1+

**Teaching point:** A **backed enum** has an underlying value (string or int).

```php
enum Cuisine: string  // "string" means each case has a string value
{
    case Italian = 'italian';   // value is 'italian'
    case Hungarian = 'hungarian';
    // ...
}
```

- `Cuisine::Italian->value` → `'italian'`
- `Cuisine::from('italian')` → `Cuisine::Italian` (throws if invalid)
- `Cuisine::tryFrom('xyz')` → `null` if invalid

#### Implementation: Enum Class

**Teaching point:** Enums live in `app/Enums/`. The `label()` method is for display; the `value` is for storage.

```php
// app/Enums/Cuisine.php
namespace App\Enums;

enum Cuisine: string
{
    case Hungarian = 'hungarian';
    case Italian = 'italian';
    case Asian = 'asian';
    case Mexican = 'mexican';
    case French = 'french';
    case Indian = 'indian';
    case American = 'american';
    case Mediterranean = 'mediterranean';
    case Other = 'other';

    public function label(): string
    {
        return match($this) {
            self::Hungarian => 'Hungarian',
            self::Italian => 'Italian',
            self::Asian => 'Asian',
            self::Mexican => 'Mexican',
            self::French => 'French',
            self::Indian => 'Indian',
            self::American => 'American',
            self::Mediterranean => 'Mediterranean',
            self::Other => 'Other',
        };
    }

    public static function options(): array
    {
        return array_map(fn($case) => [
            'value' => $case->value,
            'label' => $case->label(),
        ], self::cases());
    }
}
```

**Common mistake:** Forgetting to add `cuisine` to `$fillable` in the Recipe model. Mass assignment will ignore it otherwise.

#### Implementation: Migration

```php
// database/migrations/xxxx_add_cuisine_to_recipes_table.php
Schema::table('recipes', function (Blueprint $table) {
    $table->string('cuisine')->nullable()->after('description');
});
```

**Teaching point:** We use `string` because we store the enum’s backing value. `nullable()` allows recipes without a cuisine.

#### Implementation: Model and Form

**Recipe model:** Add `cuisine` to `$fillable` and cast it to the enum:

```php
protected $fillable = [..., 'cuisine', ...];

protected $casts = [
    'tags' => 'array',
    'cuisine' => Cuisine::class,
];
```

**Blade form:** Loop over enum cases for the select options:

```blade
<select name="cuisine" id="cuisine">
    <option value="">-- Select Cuisine --</option>
    @foreach(\App\Enums\Cuisine::cases() as $cuisine)
        <option value="{{ $cuisine->value }}" @selected(old('cuisine', $recipe->cuisine?->value) === $cuisine->value)>
            {{ $cuisine->label() }}
        </option>
    @endforeach
</select>
```

**Controller:** Handle empty/invalid values safely:

```php
$validated['cuisine'] = !empty($validated['cuisine']) 
    ? Cuisine::tryFrom($validated['cuisine']) 
    : null;
```

**Common mistake:** Using `Cuisine::from('')` when the user selects "no cuisine" — it throws. Use `tryFrom()` or check for empty first.

---

### Part 1 Summary and Migration Order

1. `php artisan make:migration create_collection_recipe_table`
2. `php artisan make:migration add_cuisine_to_recipes_table`
3. Create `app/Enums/Cuisine.php` (or `php artisan make:enum Cuisine`)
4. Run `php artisan migrate`

**Teaching point:** Migration order matters when there are foreign keys. Run migrations in the correct sequence.

---

## Part 2: User System (Laravel Breeze + Roles)

### Learning Objectives

By the end of Part 2, students will be able to:

- Install and configure Laravel Breeze
- Associate models with the authenticated user
- Use policies for authorization
- Implement role-based access (user vs admin)
- Protect routes with middleware

---

### Lesson 2.1: Install Laravel Breeze

#### Concept: Why Use an Auth Starter Kit?

**Teaching point:** Authentication (login, registration, password reset) is complex. Laravel Breeze provides a solid, customizable starting point so we can focus on app logic.

**What Breeze adds:**

- Registration, login, logout
- Password reset
- Email verification (optional)
- Pre-built Blade views (or Livewire/Inertia)

```bash
composer require laravel/breeze --dev
php artisan breeze:install
```

Choose **Blade** to match the existing layout. Then:

```bash
php artisan migrate
npm install && npm run build
```

**Teaching point:** Breeze adds migrations (e.g. `users`, `password_reset_tokens`). Run `migrate` to apply them.

---

### Lesson 2.2: User–Recipe and User–Collection Relationships

#### Concept: Ownership (One-to-Many)

**Teaching point:** Each recipe and collection should belong to one user. This is a one-to-many relationship: one user has many recipes, one user has many collections.

**Why `user_id`?**

- Know who created each recipe/collection
- Filter data by owner
- Enforce "you can only edit your own" rules

#### Implementation: Migrations

```php
// add_user_id_to_recipes_table
Schema::table('recipes', function (Blueprint $table) {
    $table->foreignId('user_id')->nullable()->after('id')->constrained()->cascadeOnDelete();
});

// add_user_id_to_collections_table
Schema::table('collections', function (Blueprint $table) {
    $table->foreignId('user_id')->nullable()->after('id')->constrained()->cascadeOnDelete();
});
```

**Teaching point:** `nullable()` allows existing rows without a user. For new apps, you might omit it. `cascadeOnDelete()` deletes a user’s recipes/collections when the user is deleted.

**Don’t forget:** Add `user_id` to `$fillable` in Recipe and Collection models.

#### Implementation: Model Relationships

**User.php:**
```php
public function recipes()
{
    return $this->hasMany(Recipe::class);
}

public function collections()
{
    return $this->hasMany(Collection::class);
}
```

**Recipe.php & Collection.php:**
```php
public function user()
{
    return $this->belongsTo(User::class);
}
```

**Controller:** Set owner when creating:

```php
$validated['user_id'] = auth()->id();
Recipe::create($validated);
```

---

### Lesson 2.3: Admin Role

#### Concept: Role-Based Access

**Teaching point:** We need two roles: regular users (edit only their own data) and admins (edit everything). A simple `role` column is enough for this.

#### Implementation: Migration

```php
// add_role_to_users_table
Schema::table('users', function (Blueprint $table) {
    $table->string('role')->default('user')->after('email');
});
```

#### Implementation: UserRole Enum (Optional)

```php
// app/Enums/UserRole.php
namespace App\Enums;

enum UserRole: string
{
    case User = 'user';
    case Admin = 'admin';
}
```

#### Implementation: User Model

```php
use App\Enums\UserRole;

protected $fillable = ['name', 'email', 'password', 'role'];

protected function casts(): array
{
    return [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'role' => UserRole::class,
    ];
}

public function isAdmin(): bool
{
    return $this->role === UserRole::Admin;
}
```

**Teaching point:** `isAdmin()` centralizes the check. Use it in policies, controllers, and views.

---

### Lesson 2.4: Policies (Authorization)

#### Concept: Authorization vs Authentication

**Teaching point:** Clarify the difference:

- **Authentication:** "Who are you?" (login)
- **Authorization:** "Are you allowed to do this?" (e.g. edit this recipe)

Policies answer: "Can this user perform this action on this model?"

#### Concept: Policy Methods

**Teaching point:** Policy methods receive the user and the model, and return `true` or `false`.

| Method   | When it runs                         |
|----------|--------------------------------------|
| `view`   | Viewing a single resource             |
| `create` | Showing create form / storing        |
| `update` | Showing edit form / updating         |
| `delete` | Deleting                              |

#### Implementation: RecipePolicy

```php
// app/Policies/RecipePolicy.php
public function update(User $user, Recipe $recipe): bool
{
    return $user->isAdmin() || $recipe->user_id === $user->id;
}

public function delete(User $user, Recipe $recipe): bool
{
    return $user->isAdmin() || $recipe->user_id === $user->id;
}

public function create(User $user): bool
{
    return true; // any logged-in user can create
}
```

**Teaching point:** Admin can do anything; others can only edit/delete their own recipes.

#### Implementation: CollectionPolicy

```php
// app/Policies/CollectionPolicy.php
public function update(User $user, Collection $collection): bool
{
    return $user->isAdmin() || $collection->user_id === $user->id;
}

public function delete(User $user, Collection $collection): bool
{
    return $user->isAdmin() || $collection->user_id === $user->id;
}
```

#### Register Policies

In Laravel 11+, policies are often auto-discovered if they follow the naming convention (`RecipePolicy` for `Recipe`). Otherwise, register in `AppServiceProvider` or `AuthServiceProvider`:

```php
protected $policies = [
    Recipe::class => RecipePolicy::class,
    Collection::class => CollectionPolicy::class,
];
```

#### Using Policies in Controllers

```php
// RecipeController
public function __construct()
{
    $this->authorizeResource(Recipe::class, 'recipe');
}
```

**Teaching point:** `authorizeResource` maps resource actions to policy methods (e.g. `update` → `RecipePolicy::update`). The route parameter name must match the second argument (`recipe`).

**Filtering in index:**

```php
public function index()
{
    $recipes = auth()->user()->isAdmin()
        ? Recipe::latest()->paginate(12)
        : auth()->user()->recipes()->latest()->paginate(12);
    return view('recipe.index', compact('recipes'));
}
```

**Common mistake:** Forgetting to pass the model to the policy. Route model binding provides it automatically when the parameter name matches.

---

### Lesson 2.5: Route Protection

#### Concept: Middleware

**Teaching point:** Middleware runs before the controller. `auth` ensures the user is logged in; unauthenticated users are redirected to the login page.

#### Implementation

```php
// routes/web.php
Route::middleware(['auth'])->group(function () {
    Route::resource('/recipes', RecipeController::class);
    Route::resource('/collections', CollectionController::class);
});
```

**Optional:** Admin-only routes:

```php
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/users', [AdminController::class, 'users'])->name('admin.users');
});
```

#### Admin Middleware

```php
// app/Http/Middleware/EnsureUserIsAdmin.php
public function handle(Request $request, Closure $next)
{
    if (!auth()->user()?->isAdmin()) {
        abort(403);
    }
    return $next($request);
}
```

Register in `bootstrap/app.php` (Laravel 11+):

```php
->withMiddleware(function (Middleware $middleware) {
    $middleware->alias(['admin' => \App\Http\Middleware\EnsureUserIsAdmin::class]);
})
```

---

### Lesson 2.6: Create Admin User

#### Seeder

```php
// database/seeders/AdminUserSeeder.php
User::create([
    'name' => 'Admin',
    'email' => 'admin@foodatlas.test',
    'password' => Hash::make('password'),
    'role' => 'admin',
]);
```

Call from `DatabaseSeeder` or run: `php artisan db:seed --class=AdminUserSeeder`

#### Manual (Tinker)

```bash
php artisan tinker
>>> \App\Models\User::create(['name'=>'Admin','email'=>'admin@test.com','password'=>bcrypt('secret'),'role'=>'admin']);
```

---

## Troubleshooting Guide

| Problem | Likely cause | Solution |
|---------|--------------|----------|
| Enum field not saving | Missing from `$fillable` | Add `cuisine` to `$fillable` |
| `Cuisine::from('')` error | Empty string when no cuisine selected | Use `tryFrom()` or check `!empty()` first |
| "Call to undefined cast" | Enum file in wrong folder | Ensure `App\Enums\Cuisine` is in `app/Enums/Cuisine.php` |
| 403 on edit | Policy returns false | Check `user_id` and `isAdmin()` logic |
| Policy not found | Wrong naming or not registered | Use `RecipePolicy` for `Recipe`, or register in provider |
| `authorizeResource` fails | Route param name mismatch | Second arg must match route param (e.g. `recipe`) |

---

## Checklist (Student Self-Assessment)

- [ ] Collection–Recipe many-to-many pivot table created and migrated
- [ ] Cuisine enum created and `cuisine` field added to recipes
- [ ] Laravel Breeze installed and configured
- [ ] `user_id` added to recipes and collections
- [ ] `role` added to users table
- [ ] RecipePolicy and CollectionPolicy created and used
- [ ] Controllers set `user_id` on create and use `authorizeResource`
- [ ] Routes protected with `auth` middleware
- [ ] Admin user created and can manage all resources

---

## Discussion Questions for Class

1. When would you use `sync()` vs `attach()` for a many-to-many relationship?
2. Why store enum values as strings in the database instead of integers?
3. What is the difference between `Cuisine::from()` and `Cuisine::tryFrom()`?
4. Why use policies instead of putting authorization logic directly in controllers?
5. What happens if we forget `cascadeOnDelete()` on a foreign key?
