import { Section } from '../../components/site/Section'
import { solutionContent } from '../../lib/content'
import { CTA } from '../../components/site/CTA'

export default function LoesungPage() {
  return (
    <>
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Lösung</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              {solutionContent.whatIs.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {solutionContent.whatIs.description}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {solutionContent.suitableAreas.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutionContent.suitableAreas.areas.map((area, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary-600">
                    {area.type}
                  </h3>
                  <p className="text-gray-700">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {solutionContent.requiredData.title}
            </h2>
            <ul className="space-y-3">
              {solutionContent.requiredData.data.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              {solutionContent.projectDuration.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {solutionContent.projectDuration.description}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Häufig gestellte Fragen</h2>
            <div className="space-y-6">
              {solutionContent.faq.map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-xl font-semibold mb-2 text-primary-600">
                    {item.q}
                  </h3>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <CTA
              text="Projekt jetzt anfragen"
              href="/projekt"
              variant="primary"
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
