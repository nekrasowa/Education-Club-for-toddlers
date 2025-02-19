import Link from 'next/link'

export default function FoldersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Link href="/">Home</Link>
    </>
  )
}
