import { z } from 'zod'

export const projectWizardSchema = z.object({
  // Step 1: Unternehmen
  companyName: z.string().min(2, 'Firmenname ist erforderlich'),
  contactName: z.string().min(2, 'Kontaktperson ist erforderlich'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().optional(),
  address: z.string().min(5, 'Adresse ist erforderlich'),
  industry: z.string().optional(),
  role: z.enum(['Eigentümer', 'Mieter', 'Betreiber']).optional(),

  // Step 2: Fläche
  siteType: z.enum(['Dach', 'Parkplatz', 'Freifläche', 'Fassade', 'Kombination']),
  availableAreaM2: z.number().int().positive('Fläche muss größer als 0 sein'),
  roofType: z.string().optional(),
  roofCovering: z.string().optional(),
  yearBuilt: z.number().int().positive().optional(),
  staticsKnown: z.boolean().optional(),
  ownershipClear: z.boolean().optional(),

  // Step 3: Strombedarf
  annualConsumptionKwh: z.number().int().positive('Jahresverbrauch ist erforderlich'),
  peakLoadKw: z.number().positive().optional(),
  loadProfile: z.enum(['konstant', 'werktags', 'Schichtbetrieb', 'sonstiges']).optional(),
  metering: z.string().optional(),
  currentTariffInfo: z.string().optional(),

  // Step 4: Netz & Technik
  gridConnectionPowerKw: z.number().positive().optional(),
  transformerOnSite: z.enum(['yes', 'no', 'unknown']).optional(),
  connectionPointDistanceM: z.number().int().positive().optional(),
  parkingEV: z.boolean().optional(),
  batteryInterest: z.boolean().optional(),
  evChargingInterest: z.boolean().optional(),

  // Step 5: Ziele & Rahmen
  primaryGoal: z.array(z.string()).optional(),
  timeline: z.enum(['asap', '3-6 Monate', '6-12', '>12']).optional(),
  notes: z.string().optional(),
  consentPrivacy: z.boolean().refine((val) => val === true, {
    message: 'Datenschutzerklärung muss akzeptiert werden',
  }),
})

export type ProjectWizardFormData = z.infer<typeof projectWizardSchema>
