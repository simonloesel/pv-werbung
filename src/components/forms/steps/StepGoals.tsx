'use client'

import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { ProjectWizardFormData } from '../schema'

interface StepGoalsProps {
  register: UseFormRegister<ProjectWizardFormData>
  errors: FieldErrors<ProjectWizardFormData>
}

export function StepGoals({ register, errors }: StepGoalsProps) {
  const goalOptions = [
    'Kosten senken',
    'ESG',
    'Versorgungssicherheit',
    'Eigenverbrauch',
    'Ladeinfrastruktur',
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Ziele & Rahmen</h2>
      
      <div>
        <label className="block text-sm font-medium mb-3">
          Hauptziele (Mehrfachauswahl möglich)
        </label>
        <div className="space-y-2">
          {goalOptions.map((goal) => (
            <label key={goal} className="flex items-center">
              <input
                {...register('primaryGoal')}
                type="checkbox"
                value={goal}
                className="mr-2"
              />
              <span>{goal}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Zeitrahmen</label>
        <select
          {...register('timeline')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        >
          <option value="">Bitte wählen</option>
          <option value="asap">So schnell wie möglich</option>
          <option value="3-6 Monate">3-6 Monate</option>
          <option value="6-12">6-12 Monate</option>
          <option value=">12">Länger als 12 Monate</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Weitere Anmerkungen</label>
        <textarea
          {...register('notes')}
          rows={4}
          placeholder="Zusätzliche Informationen, Fragen oder Anforderungen"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
      </div>

      <div className="border-t pt-6">
        <label className="flex items-start">
          <input
            {...register('consentPrivacy')}
            type="checkbox"
            className="mr-2 mt-1"
            required
          />
          <span className="text-sm">
            Ich habe die{' '}
            <a href="/datenschutz" className="text-primary-600 underline" target="_blank">
              Datenschutzerklärung
            </a>{' '}
            gelesen und stimme der Verarbeitung meiner Daten zu.{' '}
            <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consentPrivacy && (
          <p className="text-red-500 text-sm mt-1">{errors.consentPrivacy.message}</p>
        )}
      </div>
    </div>
  )
}
