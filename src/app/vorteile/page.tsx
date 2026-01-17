import { Section } from '../../components/site/Section'
import { BenefitTabs } from '../../components/site/BenefitTabs'

export default function VorteilePage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Vorteile</h1>
          <p className="text-xl text-gray-600">
            Für alle Beteiligten – Unternehmen, Kommunen, EPC und Investoren
          </p>
        </div>
        <BenefitTabs />
      </div>
    </Section>
  )
}
