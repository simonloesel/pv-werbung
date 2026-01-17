import Link from 'next/link'
import { Section } from '../components/site/Section'
import { CTA } from '../components/site/CTA'
import { TrustBar } from '../components/site/TrustBar'
import { Steps } from '../components/site/Steps'
import {
  heroContent,
  targetRoles,
  corePromises,
  modelSection,
  processSteps,
  companyBenefits,
  leadCtaSection,
} from '../lib/content'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {heroContent.h1}
          </h1>
          <p className="text-xl text-gray-700 mb-8">{heroContent.subline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA
              text={heroContent.ctaPrimary.text}
              href={heroContent.ctaPrimary.href}
              variant="primary"
            />
            <CTA
              text={heroContent.ctaSecondary.text}
              href={heroContent.ctaSecondary.href}
              variant="secondary"
            />
          </div>
        </div>
        <TrustBar items={heroContent.trustBar} />
      </Section>

      {/* Für wen */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Für wen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {targetRoles.map((role, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <p className="text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <CTA
              text="Ich bin Unternehmen"
              href="#kernversprechen"
              variant="primary"
            />
          </div>
        </div>
      </Section>

      {/* Kernversprechen */}
      <Section background="gray" className="scroll-mt-20" id="kernversprechen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Kernversprechen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePromises.map((promise, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">
                  {promise.title}
                </h3>
                <p className="text-gray-600">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Modell */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{modelSection.headline}</h2>
          <ul className="text-left max-w-2xl mx-auto space-y-4 mb-8">
            {modelSection.points.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary-600 mr-3 text-xl">✓</span>
                <span className="text-lg">{point}</span>
              </li>
            ))}
          </ul>
          <CTA
            text={modelSection.cta.text}
            href={modelSection.cta.href}
            variant="primary"
          />
        </div>
      </Section>

      {/* Ablauf */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ablauf</h2>
          <Steps steps={processSteps} />
        </div>
      </Section>

      {/* Vorteile Unternehmen */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Vorteile für Unternehmen</h2>
          <ul className="space-y-3">
            {companyBenefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary-600 mr-3 text-xl">•</span>
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-8">
            <CTA text="Alle Vorteile ansehen" href="/vorteile" variant="primary" />
          </div>
        </div>
      </Section>

      {/* Lead CTA */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{leadCtaSection.headline}</h2>
          <CTA
            text={leadCtaSection.cta.text}
            href={leadCtaSection.cta.href}
            variant="primary"
            className="text-lg px-8 py-4"
          />
        </div>
      </Section>
    </>
  )
}
