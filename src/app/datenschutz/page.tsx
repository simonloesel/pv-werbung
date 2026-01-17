import { Section } from '../../components/site/Section'

export default function DatenschutzPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Im Folgenden
            informieren wir Sie über die Erhebung, Verarbeitung und Nutzung Ihrer
            Daten beim Besuch unserer Website und bei der Nutzung unserer Dienste.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Verantwortlicher</h2>
          <p className="text-gray-700 mb-6">
            Verantwortlich für die Datenverarbeitung ist [Ihr Unternehmen]. [Ihre
            Kontaktdaten]
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p className="text-gray-700 mb-6">
            Bei der Nutzung unseres Projektformulars erheben wir folgende Daten:
            Firmenname, Kontaktperson, E-Mail-Adresse, Telefonnummer, Adresse und
            projektbezogene Informationen. Diese Daten dienen der Bearbeitung Ihrer
            Anfrage.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Zweck der Verarbeitung</h2>
          <p className="text-gray-700 mb-6">
            Die von Ihnen angegebenen Daten werden zur Bearbeitung Ihrer
            Projektanfrage und zur Kommunikation mit Ihnen verwendet.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Ihre Rechte</h2>
          <p className="text-gray-700 mb-6">
            Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten,
            diese zu berichtigen, löschen oder einschränken zu lassen. Bitte
            kontaktieren Sie uns hierfür.
          </p>
        </div>
      </div>
    </Section>
  )
}
