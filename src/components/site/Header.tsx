import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            PV-Strom
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/loesung" className="text-gray-700 hover:text-primary-600 transition">
              Lösung
            </Link>
            <Link href="/vorteile" className="text-gray-700 hover:text-primary-600 transition">
              Vorteile
            </Link>
            <Link href="/projekt" className="text-gray-700 hover:text-primary-600 transition">
              Projekt anfragen
            </Link>
            <Link href="/ueber-uns" className="text-gray-700 hover:text-primary-600 transition">
              Über uns
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-primary-600 transition">
              Kontakt
            </Link>
          </div>
          <Link
            href="/projekt"
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
          >
            Projekt starten
          </Link>
        </nav>
      </div>
    </header>
  )
}
