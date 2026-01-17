interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray'
}

export function Section({ children, className = '', background = 'white' }: SectionProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white'
  return (
    <section className={`py-16 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}
