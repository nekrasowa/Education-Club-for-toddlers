export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0
      }}>
        
        <div style={{ position: 'relative' }}>{children}</div>
       
      </body>
    </html>
  )
}
