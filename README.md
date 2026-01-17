# PV-Werbung Website (Next.js)

Eigenständige Next.js-Website für PV-Projektentwicklung und Lead-Generierung. Unternehmen können Flächen anbieten, Projekte entwickeln lassen und Strom direkt abnehmen.

## Technologie-Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Prisma** (PostgreSQL)
- **React Hook Form** + **Zod** (Form-Validation)
- **Radix UI** (Tabs, Accordion)

## Projektstruktur

```
src/
  app/                    # App Router Seiten
    layout.tsx            # Root Layout
    page.tsx              # Startseite
    loesung/              # Lösungsseite
    vorteile/             # Vorteileseite
    projekt/              # Projekt-Wizard
    api/leads/route.ts    # API Route für Leads
  components/
    site/                 # UI-Komponenten (Header, Footer, etc.)
    forms/                # Form-Komponenten (Wizard, Steps)
  lib/
    content.ts            # Content-Bausteine
    db.ts                 # Prisma Client
prisma/
  schema.prisma           # Datenbankschema (PostgreSQL)
```

## Setup

### 1. Dependencies installieren

```bash
npm install
```

### 2. Umgebungsvariablen einrichten

Erstelle eine `.env` Datei im Root-Verzeichnis:

**Für lokale Entwicklung (PostgreSQL erforderlich):**
```env
DATABASE_URL="postgresql://user:password@localhost:5432/pv_werbung"
```

**Für Vercel/Production:**
- Nutze Vercel Postgres (empfohlen) oder
- Externe PostgreSQL-Datenbank (z.B. Supabase, Neon, Railway)

### 3. Prisma Database Setup

```bash
# Prisma Client generieren
npm run db:generate

# Database Schema erstellen (für Entwicklung)
npm run db:push

# Oder Migration erstellen (für Production)
npm run db:migrate
```

### 4. Development Server starten

```bash
npm run dev
```

Die Website ist dann erreichbar unter `http://localhost:3000`.

## Deployment auf Vercel

### 1. Vercel Postgres einrichten (empfohlen)

1. In Vercel Dashboard: **Storage** → **Create Database** → **Postgres**
2. Environment Variable `DATABASE_URL` wird automatisch gesetzt
3. Deploy starten

### 2. Migration auf Vercel ausführen

Nach dem ersten Deployment:
```bash
npx prisma migrate deploy
```

Oder in Vercel:
- **Settings** → **Deploy Hooks** → Custom Build Command: `prisma migrate deploy && npm run build`

### 3. Externe PostgreSQL-Datenbank

**Option A: Supabase** (kostenloser Plan verfügbar)
1. Projekt erstellen auf https://supabase.com
2. Connection String kopieren
3. Als `DATABASE_URL` in Vercel Environment Variables setzen

**Option B: Neon** (kostenloser Plan verfügbar)
1. Projekt erstellen auf https://neon.tech
2. Connection String kopieren
3. Als `DATABASE_URL` in Vercel Environment Variables setzen

**Option C: Railway** (kostenloser Plan verfügbar)
1. Projekt erstellen auf https://railway.app
2. PostgreSQL Service hinzufügen
3. Connection String als `DATABASE_URL` in Vercel setzen

## Features

### Startseite (`/`)

- Hero-Sektion mit Haupt-CTAs
- Trust-Leiste
- Für-wen-Sektion (Zielgruppen)
- Kernversprechen
- Modell-Erklärung
- Ablauf-Schritte
- Vorteile-Übersicht
- Lead-CTA

### Lösung-Seite (`/loesung`)

- Erklärung Onsite-PV + Stromabnahme
- Geeignete Flächen
- Benötigte Daten
- Projektdauer
- FAQ

### Vorteile-Seite (`/vorteile`)

- Tabs für verschiedene Zielgruppen:
  - Unternehmen
  - Kommunen
  - EPC/Generalunternehmer
  - Investoren

### Projekt-Wizard (`/projekt`)

5-stufiges Formular:

1. **Unternehmen**: Firmendaten, Kontakt
2. **Fläche**: Flächentyp, Größe, Dachdetails
3. **Strombedarf**: Verbrauch, Lastprofil
4. **Netz & Technik**: Anschluss, Speicher, Ladeinfrastruktur
5. **Ziele & Rahmen**: Zeitrahmen, Anmerkungen, Datenschutz

**Features:**
- Fortschrittsanzeige
- LocalStorage-Speicherung (Zwischenspeicherung)
- Zod-Validation (Client + Server)
- Responsive Design

### API Route (`/api/leads`)

**POST** `/api/leads`

Speichert Lead-Daten in der Datenbank (via Prisma/PostgreSQL).

**Request Body:** Siehe `src/components/forms/schema.ts`

**Response:**
- `201`: `{ "ok": true, "leadId": "..." }`
- `400`: `{ "ok": false, "error": "validation_error", "fields": {...} }`
- `500`: `{ "ok": false, "error": "server_error" }`

## Datenbank

Die Datenbank nutzt **PostgreSQL** (production-ready).

**Lead-Modell** enthält alle Formularfelder plus:
- `id`: CUID
- `createdAt`: Zeitstempel
- `status`: `new`, `qualified`, `disqualified`, `contacted`

### Database Studio

```bash
npm run db:studio
```

Öffnet Prisma Studio zum Betrachten/Editieren der Daten.

## Scripts

```bash
npm run dev          # Development Server
npm run build        # Production Build (generiert Prisma Client automatisch)
npm run start        # Production Server
npm run lint         # ESLint
npm run db:generate  # Prisma Client generieren
npm run db:push      # Schema zu DB pushen (Development)
npm run db:migrate   # Migration erstellen (Production)
npm run db:studio    # Prisma Studio öffnen
```

## Anpassungen

### Content anpassen

Alle Copy-Texte sind in `src/lib/content.ts` zentralisiert.

### Styling anpassen

- **Tailwind Config**: `tailwind.config.js`
- **Globale Styles**: `src/app/globals.css`
- **Primary Color**: Standard `primary-600` (orange)

### Formular-Felder anpassen

1. Schema: `src/components/forms/schema.ts`
2. Steps: `src/components/forms/steps/*.tsx`
3. API Route: `src/app/api/leads/route.ts`
4. Prisma Schema: `prisma/schema.prisma`

## Production Deployment

### Vercel (empfohlen)

1. Projekt zu GitHub pushen
2. Vercel Projekt erstellen
3. **Vercel Postgres** hinzufügen (Storage → Postgres)
4. Environment Variables werden automatisch gesetzt
5. Deploy

**Wichtig:** Nach dem ersten Deployment Migration ausführen:
```bash
npx prisma migrate deploy
```

### Migration auf Production anwenden

Nach Vercel Postgres Setup:
1. Vercel CLI installieren: `npm i -g vercel`
2. Login: `vercel login`
3. Projekt linken: `vercel link`
4. Migration deployen: `npx prisma migrate deploy`

Oder über Vercel Dashboard:
- **Settings** → **Deploy Hooks** → Build Command anpassen

## Akzeptanzkriterien

✅ Responsive Design (Mobile + Desktop)
✅ Form-Validation (Client + Server mit Zod)
✅ LocalStorage-Zwischenspeicherung
✅ Leads werden in PostgreSQL-Datenbank gespeichert
✅ Alle Seiten vorhanden (Lösung, Vorteile, Kontakt, etc.)
✅ Vorteile-Seite mit Tabs
✅ FAQ auf Lösungsseite
✅ Datenschutz/Impressum vorhanden
✅ Production-ready mit PostgreSQL

## Nächste Schritte

- [ ] Email-Benachrichtigung bei neuen Leads (optional)
- [ ] Admin-Dashboard für Lead-Verwaltung
- [ ] Referenz-Projekte Seite (`/projekte`)
- [ ] Partner-Seite (`/partner`)
- [ ] Analytics Integration
- [ ] SEO-Optimierung (Meta-Tags, Sitemap)
