import { Section } from '../../components/site/Section'
import { CTA } from '../../components/site/CTA'

export default function KontaktPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Kontakt</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Schreiben Sie uns</h2>
            <p className="text-gray-700 mb-6">
              Haben Sie Fragen oder möchten Sie mehr erfahren? Nutzen Sie unser
              Projektformular oder kontaktieren Sie uns direkt.
            </p>
            <CTA text="Projekt anfragen" href="/projekt" variant="primary" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Projektformular</h2>
            <p className="text-gray-700 mb-6">
              Füllen Sie unser unverbindliches Projektformular aus und wir
              prüfen die Machbarkeit für Ihren Standort.
            </p>
            <CTA text="Zum Formular" href="/projekt" variant="secondary" />
          </div>
        </div>
      </div>
    </Section>
  )
}
