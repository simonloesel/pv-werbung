# PV-Werbung Website (Next.js)

Eigenständige Next.js-Website für PV-Projektentwicklung und Lead-Generierung. Unternehmen können Flächen anbieten, Projekte entwickeln lassen und Strom direkt abnehmen.

Eine Next.js-Website für PV-Projektentwicklung und Lead-Generierung. Unternehmen können Flächen anbieten, Projekte entwickeln lassen und Strom direkt abnehmen.

## Technologie-Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Prisma** (SQLite)
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
  schema.prisma           # Datenbankschema
```

## Setup

### 1. Dependencies installieren

```bash
npm install
```

### 2. Umgebungsvariablen einrichten

Erstelle eine `.env` Datei im Root-Verzeichnis:

```env
DATABASE_URL="file:./dev.db"
```

### 3. Prisma Database erstellen

```bash
# Prisma Client generieren
npm run db:generate

# Database Schema erstellen
npm run db:push
```

### 4. Development Server starten

```bash
npm run dev
```

Die Website ist dann erreichbar unter `http://localhost:3000`.

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

Speichert Lead-Daten in der Datenbank (via Prisma).

**Request Body:** Siehe `src/components/forms/schema.ts`

**Response:**
- `201`: `{ "ok": true, "leadId": "..." }`
- `400`: `{ "ok": false, "error": "validation_error", "fields": {...} }`
- `500`: `{ "ok": false, "error": "server_error" }`

## Datenbank

Die Datenbank nutzt SQLite (entwicklungsfreundlich) und kann einfach auf PostgreSQL/MySQL umgestellt werden.

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
npm run build        # Production Build
npm run start        # Production Server
npm run lint         # ESLint
npm run db:generate  # Prisma Client generieren
npm run db:push      # Schema zu DB pushen
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

## Deployment

### Vercel (empfohlen)

1. Projekt zu GitHub pushen
2. Vercel Projekt erstellen
3. Environment Variables setzen (`DATABASE_URL`)
4. Deploy

**Hinweis:** SQLite ist nicht für Production geeignet. Für Production sollte PostgreSQL verwendet werden.

### PostgreSQL für Production

1. `prisma/schema.prisma` anpassen:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

2. `DATABASE_URL` in `.env` anpassen

3. Migration erstellen:
   ```bash
   npx prisma migrate dev --name init
   ```

## Akzeptanzkriterien

✅ Responsive Design (Mobile + Desktop)
✅ Form-Validation (Client + Server mit Zod)
✅ LocalStorage-Zwischenspeicherung
✅ Leads werden in DB gespeichert
✅ Alle Seiten vorhanden (Lösung, Vorteile, Kontakt, etc.)
✅ Vorteile-Seite mit Tabs
✅ FAQ auf Lösungsseite
✅ Datenschutz/Impressum vorhanden

## Nächste Schritte

- [ ] Email-Benachrichtigung bei neuen Leads (optional)
- [ ] Admin-Dashboard für Lead-Verwaltung
- [ ] Referenz-Projekte Seite (`/projekte`)
- [ ] Partner-Seite (`/partner`)
- [ ] Analytics Integration
- [ ] SEO-Optimierung (Meta-Tags, Sitemap)
