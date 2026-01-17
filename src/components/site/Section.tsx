interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray'
  id?: string
}

export function Section({ children, className = '', background = 'white', id }: SectionProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white'
  return (
    <section id={id} className={`py-16 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}
