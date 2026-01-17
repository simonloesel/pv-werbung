interface Step {
  number: number
  title: string
  description: string
}

interface StepsProps {
  steps: Step[]
}

export function Steps({ steps }: StepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {steps.map((step) => (
        <div key={step.number} className="text-center">
          <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            {step.number}
          </div>
          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-600 text-sm">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
