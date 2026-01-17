import Link from 'next/link'

interface CTAProps {
  text: string
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function CTA({ text, href, variant = 'primary', className = '' }: CTAProps) {
  const baseClasses = 'inline-block px-6 py-3 rounded-lg font-semibold transition'
  const variantClasses =
    variant === 'primary'
      ? 'bg-primary-600 text-white hover:bg-primary-700'
      : 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50'

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {text}
    </Link>
  )
}
