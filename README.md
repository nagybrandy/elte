## `elte` monorepo – egyetemi anyagok

Ez a repo az összes fontos **egyetemi / ELTE-s** anyag központi helye.  
Ide kerülnek a webprogramozás, webfejlesztés, tanárszakos kurzusok kódjai, beadandói és ZH-i több félévre visszamenőleg.

### Struktúra röviden – miről szól ez a mappa?

- Gyökérszinten **félév mappák** vannak:
  - `2025-26-1/`, `2025-26-2/`, `2025-2/`, `2025-1/`, `2024-2/`, `2024-1/`, `2023-2/`, `2023-1/`, `2022-2/`, `2022-1/`, `2021-2/`, …
- Egy féléven belül **tárgy mappák**:
  - `webprog/`, `webfejlesztes/`, `tanarszak/`, esetleg továbbiak.
- Egy tárgy mappán belül:
  - `labs/` – heti gyakorlatok (01, 02, …)
  - `assignments/` – beadandók, starter kitekkel
  - `zh/` – ZH-k, csoportZH-k
  - `misc/` – egyéb anyagok

Konkrét példák:

- `2026-1/` – aktuális tanév őszi félév, benne pl. `advanced-webprog`, `awp-3`, `awp-4`, `awp-5`, `kliens-5` tárgymappákkal.
- `2025-2/`, `2025-1/`, … – korábbi félévi webprog/webfejlesztés kurzusok teljes anyaga.
- A gyökérben lévő `*.md` fájlok (pl. `MIGRATION.md`, `monorepos.md`, `archive-strategy.md`) az egész GitHub‑struktúrádra vonatkozó dokumentációk.

Részletes leírás: lásd az [`elte-structure.md`](./elte-structure.md) fájlt.

### Kapcsolódó monorepók

- **`elte-private`** (PRIVATE, új repo): zártabb tananyagok, advanced/megoldás jellegű kódok (pl. `laravel-foodatlas` → `advanced/`).
- **`playground`** (PRIVATE, új repo): kísérletek, hobby projektek, AOC feladatok, SZLG-s és magántanításos dolgok.

Ezek felépítését és a migrációt részletesen az alábbi fájlok írják le:

- [`monorepos.md`](./monorepos.md) – monorepók és kategóriák
- [`MIGRATION.md`](./MIGRATION.md) – konkrét repo → mappa migrációs terv
- [`archive-strategy.md`](./archive-strategy.md) – archív és törlési szabályok
- [`github-cli-scripts.md`](./github-cli-scripts.md) – GitHub CLI parancsok (visibility, archive, törlés)

### Visibility szabály

- **Csak ez az `elte` repo marad PUBLIC.**
- Minden más saját repó PRIVATE lehet; a tartalmuk ettől függetlenül beolvadhat az `elte`, `elte-private` vagy `playground` monorepókba.

