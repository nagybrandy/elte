# MiniShop – 2×60 perces gyakorlat (React + Redux Toolkit + RTK Query + Fastify)

Egy **kávétemájú mini webshop** gyakorlat, két leckére bontva:

- **1. lecke (60 perc)**: Kosár állapot Redux Toolkit-kel
- **2. lecke (60 perc)**: API hívások RTK Query-vel + Auth

Ez a mappa tartalmazza:

- `client/`, `server/`: **STARTER (feladat)**

## Indítás

### Frontend

```bash
cd webshop/client
npm install
npm run dev
```

### API (2. lecke)

```bash
cd webshop/server
npm install
npm run dev
```

---

## 1. lecke (60 perc) – Redux Toolkit kosár

### Cél

- Terméklista (UI adott, lokális Redux store-t használ)
- Termék részletes oldal (UI adott)
- Kosár állapot Redux Toolkit-kel (**te implementálod**)
- Új termék form (bekötés)

### Lépések (1. lecke)

A Redux Toolkit használatára már van egy példa a `client/src/stores/productsSlice.ts` fájlban. Ez egy Redux slice-ban tárolja a termékeket és tartalmaz egy `addProduct` akciót. Használd referenciaként.

#### 1) Egészítsd ki a cart slice-t

- **Módosítandó fájl**: `client/src/stores/cartSlice.ts`
- A slice váza és a típusok már adottak; implementáld a reducer logikát
- Állapot struktúra: `items: Array<{ productId: string; qty: number }>`
- **Implementálandó reducerek**:
  - `add(productId)`: növeli a qty-t (vagy qty=1-gyel létrehozza, ha még nincs)
  - `dec(productId)`: csökkenti a qty-t; ha 0-ra csökken, távolítja el az elemet
  - `remove(productId)`: eltávolítja az elemet a qty-tól függetlenül
  - `clear()`: kiüríti a kosarat
- Docs:
  - Redux Toolkit `createSlice`: https://redux-toolkit.js.org/api/createSlice
  - Reducers írása Immerrel: https://immerjs.github.io/immer/

**Ellenőrzés**: „Add to cart" kattintás → Redux DevTools megnyitása → a `cart.items` tömb helyesen frissül.

#### 2) Kösd be a `ProductCard`-ot és a navigációt

- **Módosítandó fájlok**: `client/src/components/ProductCard.tsx`, `client/src/layout/RootLayout.tsx`
- `ProductCard`:
  - olvasd ki a qty-t Reduxból:
    ```ts
    const qty = useAppSelector(state =>
      state.cart.items.find(i => i.productId === product.id)?.qty ?? 0
    )
    ```
  - ha qty = 0: jelenjen meg az „Add to cart" gomb → `add(product.id)` dispatch
  - ha qty > 0: `− {qty} +` vezérlők → `−` → `dec(product.id)`, `+` → `add(product.id)`
- Navigációs sáv (`RootLayout`):
  - mutasd az összes darabszámot badge-ként a Cart link mellett:
    ```ts
    const totalQty = useAppSelector(state =>
      state.cart.items.reduce((sum, i) => sum + i.qty, 0)
    )
    ```

**Ellenőrzés**: „Add to cart" kattintás → gomb `− 1 +`-ra változik. `+` → `− 2 +`. A badge azonnal frissül.

#### 3) Kösd be a kosár oldalt

- **Módosítandó fájl**: `client/src/pages/CartPage.tsx`
- Olvasd ki a kosár elemeket: `useAppSelector(state => state.cart.items)`
- Minden elemhez keresd meg a terméket a products store-ból:
  `useAppSelector(state => state.products.items.find(p => p.id === item.productId))`
- Jelenítsd meg: termék kép + név, `qty × ár HUF`, sor összeg
- „Remove" gomb → `remove(item.productId)` dispatch
- „Clear all" gomb → `clear()` dispatch
- Mutasd a végösszeget alul

**Ellenőrzés**: a kosár oldal mutatja az elemeket helyes összegekkel. A termékkártyán változtatott qty azonnal megjelenik.

#### 4) Kösd be az „Új termék" formot

- **Módosítandó fájl**: `client/src/pages/NewProductPage.tsx`
- Beküldéskor dispatch-eld az `addProduct`-ot a `productsSlice`-ból és navigálj `/`-re
- Adj hozzá minimális validációt:
  - név: kötelező
  - ár: szám és > 0
  - leírás: legalább 10 karakter
- Jelenítsd meg a validációs hibákat az adott input alatt
- Docs:
  - Controlled forms: https://react.dev/reference/react-dom/components/input

**Ellenőrzés**: mentés → vissza a főoldalra → az új termék megjelenik a listán.

### Extra (opcionális, 1. lecke)

- Adj hozzá egy kis „toast" értesítést kosárba adás / mentés után

---

## 2. lecke (60 perc) – RTK Query + Auth

> **Az API teljesen előre elkészített.** Ebben a leckében csak frontend kódot kell írni.

### API + Postman indítása

Indítsd el az API-t (lásd fent), majd importáld a Postman fájlokat:

1. Importáld: `postman/webshop.postman_collection.json`
2. Importáld: `postman/webshop.postman_environment.json`

### Cél

- Cseréld le a mock adatokat valódi API hívásokra (RTK Query)
- Adj hozzá bejelentkezést (token) és védd meg az „Új termék" oldalt

### Lépések (2. lecke)

#### 0) RTK Query beállítása

- **Létrehozandó fájl**: `client/src/stores/productsApiSlice.ts`
- Hozz létre egy RTK Query API service-t:
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
- **Módosítandó fájl**: `client/src/stores/store.ts`
  - add hozzá a `[productsApi.reducerPath]: productsApi.reducer` sort a reducer maphez
  - add hozzá a `productsApi.middleware`-t a middleware lánchoz
- Ellenőrizd, hogy fut-e az API. Postmanben futtasd a `Health` és `Products - list` kéréseket.
- Docs:
  - RTK Query áttekintés: https://redux-toolkit.js.org/rtk-query/overview
  - Környezeti változók Vite-ban: https://vite.dev/guide/env-and-mode.html

**Ellenőrzés**: `/products` visszaad `{ items: [...] }` formátumban.

#### 1) Termékek lekérése RTK Query-vel

- **Módosítandó fájl**: `client/src/pages/ProductListPage.tsx`
  - cseréld le az `useAppSelector(state => state.products.items)` hívást `useGetProductsQuery()`-re
  - mutass töltő spinner-t amíg `isLoading` igaz
  - mutass hibaüzenetet ha `isError` igaz

**Ellenőrzés**: a terméklista csak akkor működik, ha az API fut. A szerver leállítása megmutatja a hiba állapotot.

#### 2) Bejelentkezés + auth slice

- **Létrehozandó fájl**: `client/src/stores/authSlice.ts`
  - állapot: `{ token: string | null }`
  - akciók: `setToken(token)`, `logout()`
  - mentsd el a tokent `localStorage`-ba (töltsd be az `initialState`-be, mentsd el a reducerben)
- **Módosítandó fájl**: `client/src/stores/productsApiSlice.ts`
  - adj hozzá egy `login` mutációt:
    ```ts
    login: build.mutation<{ token: string }, { email: string; password: string }>({
      query: (body) => ({ url: '/auth/login', method: 'POST', body }),
    })
    ```
- **Módosítandó fájl**: `client/src/stores/store.ts` — adj hozzá `auth: authReducer`-t
- **Módosítandó fájl**: `client/src/pages/LoginPage.tsx`
  - használj `useLoginMutation`-t, sikeres válasz esetén dispatch `setToken` és navigálj `/`-re
  - mutass hibaüzenetet, ha a kérés sikertelen
- **Módosítandó fájl**: `client/src/layout/RootLayout.tsx`
  - kijelentkezve: `Login | Register`; bejelentkezve: `Logout`
  - kijelentkezés: `logout()` dispatch és navigálás `/`-re
- Demo adatok: `demo@demo.hu` / `demo`
- Docs:
  - RTK Query mutációk: https://redux-toolkit.js.org/rtk-query/usage/mutations

**Ellenőrzés**: bejelentkezés → oldal újratöltése → bejelentkezve maradsz. Kijelentkezés törli a munkamenetet.

#### 3) Védett „Új termék" oldal + token küldése

- **Módosítandó fájl**: `client/src/stores/productsApiSlice.ts`
  - minden kérésbe injektáld a tokent `prepareHeaders`-szel:
    ```ts
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.token
      if (token) headers.set('authorization', `Bearer ${token}`)
      return headers
    }
    ```
  - adj hozzá `createProduct` mutációt (`POST /products`, `invalidatesTags: ['Products']`)
- **Módosítandó fájl**: `client/src/router.tsx`
  - adj hozzá `loader`-t a `/new` route-hoz:
    ```ts
    loader: () => {
      const token = store.getState().auth.token
      if (!token) return redirect('/login')
      return null
    }
    ```
- **Módosítandó fájl**: `client/src/pages/NewProductPage.tsx`
  - használj `useCreateProductMutation`-t, sikeres válasz esetén navigálj `/`-re
- Docs:
  - RTK Query `prepareHeaders`: https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#setting-default-headers
  - React Router loaderek: https://reactrouter.com/en/main/route/loader

**Ellenőrzés**: kijelentkezve → `/new` átirányít `/login`-ra; bejelentkezve → a létrehozás működik.

#### 4) Opcionális: Regisztráció

- Adj hozzá `register` mutációt a `productsApiSlice.ts`-be (`POST /auth/register`)
- Kösd be a `RegisterPage.tsx`-et: sikeres válasz esetén dispatch `setToken` és navigálj `/`-re

---

## Extra feladatok (leckék után)

- **(H) Regisztráció befejezése**: implementálj valódi regisztrációt, frissítsd a navigációs sávot.
- **(I) Teljes CRUD bejelentkezés után**:
  - Az API végpontok már léteznek: `PUT /products/:id` és `DELETE /products/:id` (JWT védett)
  - Adj hozzá „Termék szerkesztése" oldalt és tedd lehetővé a törlést a részletes oldalról
  - Teszteld Postmanben a mentett tokennel
