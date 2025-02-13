'use client'

import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()
 const previousPage = pathname.split('/')[1] 
  return (
    <>
      <h1>Page Not found</h1>
      <h2>Go back to {previousPage}</h2>
    </>
  )
}
