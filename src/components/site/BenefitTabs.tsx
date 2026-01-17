'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { benefitsContent } from '../../../lib/content'

export function BenefitTabs() {
  return (
    <Tabs.Root defaultValue="unternehmen" className="w-full">
      <Tabs.List className="flex flex-wrap border-b border-gray-200 mb-8">
        {Object.entries(benefitsContent).map(([key, content]) => (
          <Tabs.Trigger
            key={key}
            value={key}
            className="px-6 py-3 text-gray-700 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600 data-[state=active]:border-primary-600 data-[state=active]:text-primary-600 transition"
          >
            {content.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {Object.entries(benefitsContent).map(([key, content]) => {
        if (key === 'unternehmen' && 'categories' in content) {
          return (
            <Tabs.Content key={key} value={key} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">{content.title}</h3>
                <p className="text-gray-600 mb-6">{content.subtitle}</p>
              </div>
              {Object.entries(content.categories).map(([catKey, category]) => (
                <div key={catKey} className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-primary-600">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Tabs.Content>
          )
        }

        if ('points' in content && Array.isArray(content.points)) {
          return (
            <Tabs.Content key={key} value={key} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{content.title}</h3>
                <p className="text-gray-600 mb-6">{content.subtitle}</p>
              </div>
              <ul className="space-y-3">
                {content.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Tabs.Content>
          )
        }

        return null
      })}
    </Tabs.Root>
  )
}
