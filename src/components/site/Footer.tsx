import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PV-Strom</h3>
            <p className="text-gray-400">
              PV-Anlagen entwickeln und Strom direkt abnehmen
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/loesung" className="hover:text-white transition">
                  Lösung
                </Link>
              </li>
              <li>
                <Link href="/vorteile" className="hover:text-white transition">
                  Vorteile
                </Link>
              </li>
              <li>
                <Link href="/projekt" className="hover:text-white transition">
                  Projekt anfragen
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="hover:text-white transition">
                  Über uns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/impressum" className="hover:text-white transition">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/kontakt" className="hover:text-white transition">
                  Kontakt aufnehmen
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PV-Strom. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
