'use client'

import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form'
import { ProjectWizardFormData } from '../schema'

interface StepSiteProps {
  register: UseFormRegister<ProjectWizardFormData>
  errors: FieldErrors<ProjectWizardFormData>
  watch: UseFormWatch<ProjectWizardFormData>
}

export function StepSite({ register, errors, watch }: StepSiteProps) {
  const siteType = watch('siteType')
  const showRoofFields = siteType === 'Dach' || siteType === 'Kombination'

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Fläche</h2>
      
      <div>
        <label className="block text-sm font-medium mb-2">
          Flächentyp <span className="text-red-500">*</span>
        </label>
        <select
          {...register('siteType')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        >
          <option value="">Bitte wählen</option>
          <option value="Dach">Dach</option>
          <option value="Parkplatz">Parkplatz</option>
          <option value="Freifläche">Freifläche</option>
          <option value="Fassade">Fassade</option>
          <option value="Kombination">Kombination</option>
        </select>
        {errors.siteType && (
          <p className="text-red-500 text-sm mt-1">{errors.siteType.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Verfügbare Fläche (m²) <span className="text-red-500">*</span>
        </label>
        <input
          {...register('availableAreaM2', { valueAsNumber: true })}
          type="number"
          min="1"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
        {errors.availableAreaM2 && (
          <p className="text-red-500 text-sm mt-1">{errors.availableAreaM2.message}</p>
        )}
      </div>

      {showRoofFields && (
        <>
          <div>
            <label className="block text-sm font-medium mb-2">Dachtyp</label>
            <select
              {...register('roofType')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            >
              <option value="">Bitte wählen</option>
              <option value="Flachdach">Flachdach</option>
              <option value="Satteldach">Satteldach</option>
              <option value="Pultdach">Pultdach</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Dachdeckung</label>
            <input
              {...register('roofCovering')}
              type="text"
              placeholder="z.B. Ziegel, Metall, Bitumen"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Baujahr</label>
            <input
              {...register('yearBuilt', { valueAsNumber: true })}
              type="number"
              min="1900"
              max={new Date().getFullYear()}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            />
          </div>
        </>
      )}

      <div>
        <label className="flex items-center">
          <input
            {...register('staticsKnown')}
            type="checkbox"
            className="mr-2"
          />
          <span>Statik ist bekannt/geklärt</span>
        </label>
      </div>

      <div>
        <label className="flex items-center">
          <input
            {...register('ownershipClear')}
            type="checkbox"
            className="mr-2"
          />
          <span>Eigentumsverhältnisse sind geklärt</span>
        </label>
      </div>
    </div>
  )
}
