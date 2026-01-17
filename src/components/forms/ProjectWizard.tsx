'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { projectWizardSchema, ProjectWizardFormData } from './schema'
import { StepCompany } from './steps/StepCompany'
import { StepSite } from './steps/StepSite'
import { StepDemand } from './steps/StepDemand'
import { StepGrid } from './steps/StepGrid'
import { StepGoals } from './steps/StepGoals'

const STEPS = [
  { id: 1, title: 'Unternehmen' },
  { id: 2, title: 'Fläche' },
  { id: 3, title: 'Strombedarf' },
  { id: 4, title: 'Netz & Technik' },
  { id: 5, title: 'Ziele & Rahmen' },
]

export function ProjectWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<ProjectWizardFormData>({
    resolver: zodResolver(projectWizardSchema),
    mode: 'onChange',
  })

  // LocalStorage speichern/laden
  useEffect(() => {
    const saved = localStorage.getItem('projectWizardForm')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        // Form values können hier gesetzt werden, wenn nötig
      } catch (e) {
        console.error('Failed to load form data:', e)
      }
    }
  }, [])

  const saveToLocalStorage = (data: Partial<ProjectWizardFormData>) => {
    localStorage.setItem('projectWizardForm', JSON.stringify(data))
  }

  const onSubmit = async (data: ProjectWizardFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.ok) {
        localStorage.removeItem('projectWizardForm')
        setSubmitSuccess(true)
      } else {
        alert('Fehler beim Absenden: ' + (result.error || 'Unbekannter Fehler'))
      }
    } catch (error) {
      console.error('Submit error:', error)
      alert('Fehler beim Absenden. Bitte versuchen Sie es später erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = async () => {
    const fields = getStepFields(currentStep)
    const isValid = await trigger(fields as any)

    if (isValid) {
      const formData = watch()
      saveToLocalStorage(formData)
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const getStepFields = (step: number): (keyof ProjectWizardFormData)[] => {
    switch (step) {
      case 1:
        return ['companyName', 'contactName', 'email', 'address']
      case 2:
        return ['siteType', 'availableAreaM2']
      case 3:
        return ['annualConsumptionKwh']
      case 4:
        return []
      case 5:
        return ['consentPrivacy']
      default:
        return []
    }
  }

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Vielen Dank!</h2>
          <p className="text-lg text-gray-700 mb-4">
            Ihre Projektanfrage wurde erfolgreich übermittelt.
          </p>
          <p className="text-gray-600">
            Wir melden uns zeitnah innerhalb weniger Werktage bei Ihnen.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Projekt anfragen</h1>
        <p className="text-gray-600">
          Füllen Sie das Formular aus und wir prüfen die Machbarkeit für Ihren Standort.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className={`flex-1 flex items-center ${
                step.id < STEPS.length ? 'pr-2' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  step.id <= currentStep
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step.id}
              </div>
              {step.id < STEPS.length && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step.id < currentStep ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          {STEPS.map((step) => (
            <span
              key={step.id}
              className={step.id === currentStep ? 'font-semibold text-primary-600' : ''}
            >
              {step.title}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-8">
        {currentStep === 1 && <StepCompany register={register} errors={errors} />}
        {currentStep === 2 && <StepSite register={register} errors={errors} watch={watch} />}
        {currentStep === 3 && <StepDemand register={register} errors={errors} />}
        {currentStep === 4 && <StepGrid register={register} errors={errors} />}
        {currentStep === 5 && <StepGoals register={register} errors={errors} />}

        <div className="flex justify-between mt-8 pt-6 border-t">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Zurück
          </button>
          {currentStep < STEPS.length ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Weiter
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
