export const metadata = {
  title: 'Memorizer',
  description: 'Learn in your heart',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
