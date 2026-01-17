import { Section } from '../../components/site/Section'

export default function ImpressumPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-700 mb-6">
            [Ihr Unternehmen]<br />
            [Ihre Adresse]<br />
            [PLZ Ort]
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
          <p className="text-gray-700 mb-6">
            Telefon: [Ihre Telefonnummer]<br />
            E-Mail: [Ihre E-Mail-Adresse]
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p className="text-gray-700 mb-6">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            [Ihre USt-IdNr.]
          </p>
        </div>
      </div>
    </Section>
  )
}
