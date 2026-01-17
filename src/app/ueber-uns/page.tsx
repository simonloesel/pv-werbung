import { Section } from '../../components/site/Section'

export default function UeberUnsPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Über uns</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Wir entwickeln PV-Anlagen auf Gewerbeflächen und liefern den erzeugten
            Strom direkt an den Standort (Onsite/PPA). Dazu koordinieren wir
            Generalunternehmer/EPC, Kommune und Investoren.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Unser Modell ermöglicht es Unternehmen, Flächen zur Verfügung zu stellen,
            während wir die komplette Entwicklung, Finanzierung und Realisierung
            übernehmen. Der erzeugte Strom wird langfristig zu planbaren Konditionen
            geliefert.
          </p>
        </div>
      </div>
    </Section>
  )
}
