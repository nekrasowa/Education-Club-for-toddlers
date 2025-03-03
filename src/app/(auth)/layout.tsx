'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    name: 'Register',
    href: '/register',
  },
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Forgot password',
    href: '/forgot-password',
  },
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const activeStyle = {
    font: 'bold',
    color: 'red'
  }
  return (
    <div>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== '/')
        return (
          <li key={link.name}>
            <Link
              style={isActive ? activeStyle : undefined}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
      {children}
    </div>
  )
}
