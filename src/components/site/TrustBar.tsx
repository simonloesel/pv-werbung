interface TrustBarProps {
  items: string[]
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 py-8 text-sm text-gray-600">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="text-primary-600 mr-2">✓</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}
