import Link from "next/link"

export function MainNav() {
  return (
    <nav className="flex space-x-4">
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
        Events
      </Link>
      <Link href="/members" className="text-sm font-medium transition-colors hover:text-primary">
        Members
      </Link>
      <Link href="/resources" className="text-sm font-medium transition-colors hover:text-primary">
        Resources
      </Link>
      <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
        Contact
      </Link>
    </nav>
  )
}