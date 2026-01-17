'use client'

import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { ProjectWizardFormData } from '../schema'

interface StepCompanyProps {
  register: UseFormRegister<ProjectWizardFormData>
  errors: FieldErrors<ProjectWizardFormData>
}

export function StepCompany({ register, errors }: StepCompanyProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Unternehmen</h2>
      
      <div>
        <label className="block text-sm font-medium mb-2">
          Firmenname <span className="text-red-500">*</span>
        </label>
        <input
          {...register('companyName')}
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
        {errors.companyName && (
          <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Kontaktperson <span className="text-red-500">*</span>
        </label>
        <input
          {...register('contactName')}
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
        {errors.contactName && (
          <p className="text-red-500 text-sm mt-1">{errors.contactName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          E-Mail <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Telefon</label>
        <input
          {...register('phone')}
          type="tel"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Adresse <span className="text-red-500">*</span>
        </label>
        <input
          {...register('address')}
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Branche</label>
        <input
          {...register('industry')}
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Rolle</label>
        <select
          {...register('role')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        >
          <option value="">Bitte wählen</option>
          <option value="Eigentümer">Eigentümer</option>
          <option value="Mieter">Mieter</option>
          <option value="Betreiber">Betreiber</option>
        </select>
      </div>
    </div>
  )
}
