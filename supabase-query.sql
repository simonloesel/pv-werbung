-- Supabase SQL Editor Queries
-- Kopieren Sie diese Queries in den Supabase SQL Editor und führen Sie sie aus

-- 1. Prüfen Sie, welche Datenbank Sie verwenden
SELECT current_database(), current_schema();

-- 2. Prüfen Sie alle Tabellen im public Schema
SELECT tablename, schemaname 
FROM pg_tables 
WHERE schemaname = 'public' 
ORDER BY tablename;

-- 3. Prüfen Sie, ob die lead-Tabelle existiert und die Struktur
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_schema = 'public' 
AND table_name = 'lead'
ORDER BY ordinal_position;

-- 4. ZÄHLEN Sie alle Leads (ohne Daten zu laden)
SELECT COUNT(*) as total_leads FROM public.lead;

-- 5. Alle Leads anzeigen (mit allen Spalten)
SELECT 
  id,
  "createdAt",
  "companyName",
  "contactName",
  email,
  phone,
  address,
  "siteType",
  "availableAreaM2",
  "annualConsumptionKwh",
  status
FROM public.lead
ORDER BY "createdAt" DESC
LIMIT 20;

-- 6. Prüfen Sie die neuesten 5 Leads (kompakt)
SELECT 
  id,
  "companyName",
  email,
  "createdAt"
FROM public.lead
ORDER BY "createdAt" DESC
LIMIT 5;
