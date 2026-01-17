'use client'

import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { ProjectWizardFormData } from '../schema'

interface StepDemandProps {
  register: UseFormRegister<ProjectWizardFormData>
  errors: FieldErrors<ProjectWizardFormData>
}

export function StepDemand({ register, errors }: StepDemandProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Strombedarf</h2>
      
      <div>
        <label className="block text-sm font-medium mb-2">
          Jahresverbrauch (kWh) <span className="text-red-500">*</span>
        </label>
        <input
          {...register('annualConsumptionKwh', { valueAsNumber: true })}
          type="number"
          min="1"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
        {errors.annualConsumptionKwh && (
          <p className="text-red-500 text-sm mt-1">{errors.annualConsumptionKwh.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Spitzenlast (kW)</label>
        <input
          {...register('peakLoadKw', { valueAsNumber: true })}
          type="number"
          min="0"
          step="0.1"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Lastprofil</label>
        <select
          {...register('loadProfile')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        >
          <option value="">Bitte wählen</option>
          <option value="konstant">Konstant</option>
          <option value="werktags">Werktagsbetrieb</option>
          <option value="Schichtbetrieb">Schichtbetrieb</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Zählertyp</label>
        <select
          {...register('metering')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        >
          <option value="">Bitte wählen</option>
          <option value="RLM">RLM (Registrierende Leistungsmessung)</option>
          <option value="SLP">SLP (Standardlastprofil)</option>
          <option value="unbekannt">Unbekannt</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Aktueller Tarif (optional)</label>
        <textarea
          {...register('currentTariffInfo')}
          rows={3}
          placeholder="z.B. Arbeitspreis, Grundpreis, Anbieter"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
      </div>
    </div>
  )
}
