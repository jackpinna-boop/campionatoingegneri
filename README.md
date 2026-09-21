# Campionato Ingegneri

Frontend React/Vite per la gestione dei Campionati degli Ordini Provinciali degli Ingegneri.

## Architettura
- Frontend: React + Vite
- Hosting: GitHub Pages
- Backend/API: Supabase
- Database: PostgreSQL/Supabase
- Auth: Supabase Auth
- RBAC/RLS: PostgreSQL
- Business logic critica: database/RPC

## Avvio
```bash
npm install
cp .env.example .env
npm run dev
```

## Build
```bash
npm run build
```

Il frontend è statico; Supabase gestisce autenticazione, API, dati e logica applicativa.

## GitHub Pages
Il progetto usa HashRouter e GitHub Actions per il deploy su Pages.
