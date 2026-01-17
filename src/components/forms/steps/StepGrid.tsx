'use client'

import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { ProjectWizardFormData } from '../schema'

interface StepGridProps {
  register: UseFormRegister<ProjectWizardFormData>
  errors: FieldErrors<ProjectWizardFormData>
}

export function StepGrid({ register, errors }: StepGridProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Netz & Technik</h2>
      
      <div>
        <label className="block text-sm font-medium mb-2">Netzanschlussleistung (kW)</label>
        <input
          {...register('gridConnectionPowerKw', { valueAsNumber: true })}
          type="number"
          min="0"
          step="0.1"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Transformator vor Ort</label>
        <select
          {...register('transformerOnSite')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        >
          <option value="">Bitte wählen</option>
          <option value="yes">Ja</option>
          <option value="no">Nein</option>
          <option value="unknown">Unbekannt</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Entfernung zum Anschlusspunkt (m)</label>
        <input
          {...register('connectionPointDistanceM', { valueAsNumber: true })}
          type="number"
          min="0"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="flex items-center">
          <input
            {...register('parkingEV')}
            type="checkbox"
            className="mr-2"
          />
          <span>E-Mobilität / Parkplätze vorhanden</span>
        </label>
      </div>

      <div>
        <label className="flex items-center">
          <input
            {...register('batteryInterest')}
            type="checkbox"
            className="mr-2"
          />
          <span>Interesse an Batteriespeicher</span>
        </label>
      </div>

      <div>
        <label className="flex items-center">
          <input
            {...register('evChargingInterest')}
            type="checkbox"
            className="mr-2"
          />
          <span>Interesse an Ladeinfrastruktur</span>
        </label>
      </div>
    </div>
  )
}
