# MiniShop – 2x60 min practice (React + Redux Toolkit + RTK Query + Fastify)

A **tiny coffee-themed webshop** practice split into two lessons:

- **Lesson 1 (60 min)**: Cart state with Redux Toolkit
- **Lesson 2 (60 min)**: API calls with RTK Query + Auth

This folder contains:

- `client/`, `server/`: **STARTER (task)**

## Run

### Frontend

```bash
cd webshop/client
npm install
npm run dev
```

### API (Lesson 2)

```bash
cd webshop/server
npm install
npm run dev
```

---

## Lesson 1 (60 min) – Redux Toolkit cart

### Goal

- Product list (UI provided, uses local Redux store)
- Product detail page (UI provided)
- Cart state with Redux Toolkit (**you implement it**)
- New product form (wire it up)

### Step-by-step tasks (Lesson 1)

An example of Redux Toolkit usage is already provided in `client/src/stores/productsSlice.ts`. It stores the products in a global Redux slice and provides an `addProduct` action. Use it as a reference.

#### 1) Complete the cart slice

- **File to edit**: `client/src/stores/cartSlice.ts`
- The slice skeleton and types are already provided; implement the reducer logic
- State shape: `items: Array<{ productId: string; qty: number }>`
- **Implement the following reducers**:
  - `add(productId)`: increases qty for the product (or creates entry with qty=1 if not present)
  - `dec(productId)`: decreases qty; if qty reaches 0, remove the item
  - `remove(productId)`: removes the item regardless of qty
  - `clear()`: empties the cart
- Docs:
  - Redux Toolkit `createSlice`: https://redux-toolkit.js.org/api/createSlice
  - Writing reducers with Immer: https://immerjs.github.io/immer/

**Checkpoint**: clicking "Add to cart" → open Redux DevTools → the `cart.items` array updates correctly.

#### 2) Wire `ProductCard` and the navbar

- **Files to update**: `client/src/components/ProductCard.tsx`, `client/src/layout/RootLayout.tsx`
- `ProductCard`:
  - read qty from Redux:
    ```ts
    const qty = useAppSelector(state =>
      state.cart.items.find(i => i.productId === product.id)?.qty ?? 0
    )
    ```
  - when qty = 0: show "Add to cart" button → dispatches `add(product.id)`
  - when qty > 0: show `− {qty} +` controls → `−` dispatches `dec(product.id)`, `+` dispatches `add(product.id)`
- Navbar (`RootLayout`):
  - show a badge with the total quantity next to the Cart link:
    ```ts
    const totalQty = useAppSelector(state =>
      state.cart.items.reduce((sum, i) => sum + i.qty, 0)
    )
    ```

**Checkpoint**: click "Add to cart" → button changes to `− 1 +`. Click `+` → `− 2 +`. Navbar badge updates instantly.

#### 3) Wire the cart page

- **File to update**: `client/src/pages/CartPage.tsx`
- Read cart items: `useAppSelector(state => state.cart.items)`
- For each item, look up the product from the products store:
  `useAppSelector(state => state.products.items.find(p => p.id === item.productId))`
- Display rows: product image + name, `qty × price HUF`, row total
- "Remove" button → dispatches `remove(item.productId)`
- "Clear all" button → dispatches `clear()`
- Show total price at the bottom

**Checkpoint**: cart page shows all items with correct totals. Changes on product cards are reflected immediately.

#### 4) Wire the "New product" form

- **File to update**: `client/src/pages/NewProductPage.tsx`
- On submit, dispatch `addProduct` from `productsSlice` and navigate to `/`
- Add minimal validation:
  - name: required
  - price: must be a number and > 0
  - description: min 10 characters
- Show validation errors below the relevant input
- Docs:
  - Controlled forms: https://react.dev/reference/react-dom/components/input

**Checkpoint**: save → go back to `/` → the new product appears in the list.

### Extra (optional, Lesson 1)

- Add a small "toast" notification after add-to-cart / save

---

## Lesson 2 (60 min) – RTK Query + Auth

> **The API is fully pre-built.** You only need to write frontend code.

### Run the API + Postman

Start the API (see top of this file), then import the Postman files:

1. Import `postman/webshop.postman_collection.json`
2. Import `postman/webshop.postman_environment.json`

### Goal

- Replace mock data with real API calls (RTK Query)
- Add login (token) and protect the "New product" page

### Step-by-step tasks (Lesson 2)

#### 0) Set up RTK Query

- **File to create**: `client/src/stores/productsApiSlice.ts`
- Create an RTK Query API service:
  ```ts
  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
      baseUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:3001',
    }),
    tagTypes: ['Products'],
    endpoints: (build) => ({
      getProducts: build.query<{ items: Product[] }, void>({
        query: () => '/products',
        providesTags: ['Products'],
      }),
    }),
  })

  export const { useGetProductsQuery } = productsApi
  ```
- **File to update**: `client/src/stores/store.ts`
  - add `[productsApi.reducerPath]: productsApi.reducer` to the reducer map
  - add `productsApi.middleware` to the middleware chain
- Confirm the API is running. In Postman run `Health` and `Products - list`.
- Docs:
  - RTK Query overview: https://redux-toolkit.js.org/rtk-query/overview
  - Environment variables in Vite: https://vite.dev/guide/env-and-mode.html

**Checkpoint**: `/products` returns `{ items: [...] }`.

#### 1) Fetch products via RTK Query

- **File to update**: `client/src/pages/ProductListPage.tsx`
  - replace `useAppSelector(state => state.products.items)` with `useGetProductsQuery()`
  - show a loading spinner while `isLoading` is true
  - show an error message if `isError` is true

**Checkpoint**: product list works only when the API is running. Stopping the server shows the error state.

#### 2) Login + auth slice

- **File to create**: `client/src/stores/authSlice.ts`
  - state: `{ token: string | null }`
  - actions: `setToken(token)`, `logout()`
  - persist the token in `localStorage` (load in `initialState`, save in the reducer)
- **File to update**: `client/src/stores/productsApiSlice.ts`
  - add a `login` mutation:
    ```ts
    login: build.mutation<{ token: string }, { email: string; password: string }>({
      query: (body) => ({ url: '/auth/login', method: 'POST', body }),
    })
    ```
- **File to update**: `client/src/stores/store.ts` — add `auth: authReducer`
- **File to update**: `client/src/pages/LoginPage.tsx`
  - use `useLoginMutation`, on success dispatch `setToken` and navigate to `/`
  - show an error message if the request fails
- **File to update**: `client/src/layout/RootLayout.tsx`
  - logged out: show `Login | Register`; logged in: show `Logout`
  - logout dispatches `logout()` and navigates to `/`
- Demo credentials: `demo@demo.hu` / `demo`
- Docs:
  - RTK Query mutations: https://redux-toolkit.js.org/rtk-query/usage/mutations

**Checkpoint**: login → refresh → still logged in. Logout clears the session.

#### 3) Protect "New product" + send token

- **File to update**: `client/src/stores/productsApiSlice.ts`
  - inject the token in every request via `prepareHeaders`:
    ```ts
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.token
      if (token) headers.set('authorization', `Bearer ${token}`)
      return headers
    }
    ```
  - add a `createProduct` mutation (`POST /products`, `invalidatesTags: ['Products']`)
- **File to update**: `client/src/router.tsx`
  - add a `loader` to the `/new` route:
    ```ts
    loader: () => {
      const token = store.getState().auth.token
      if (!token) return redirect('/login')
      return null
    }
    ```
- **File to update**: `client/src/pages/NewProductPage.tsx`
  - use `useCreateProductMutation`, on success navigate to `/`
- Docs:
  - RTK Query `prepareHeaders`: https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#setting-default-headers
  - React Router loaders: https://reactrouter.com/en/main/route/loader

**Checkpoint**: logged out → `/new` redirects to `/login`; logged in → create works.

#### 4) Optional: Register

- Add a `register` mutation to `productsApiSlice.ts` (`POST /auth/register`)
- Wire `RegisterPage.tsx`: on success dispatch `setToken` and navigate to `/`

---

## Extra tasks (after the lessons)

- **(H) Finish Register**: implement real registration via API (store token), update navbar.
- **(I) Full CRUD when logged in**:
  - API endpoints already exist: `PUT /products/:id` and `DELETE /products/:id` (JWT protected)
  - Add an "Edit product" page and allow delete from the product detail page
  - Test update and delete in Postman using the saved token
