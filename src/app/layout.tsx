import Footer from './_footer'
import Header from './_header'

export const metadata = {
  title: 'Memorizer',
  description: 'Learn in your heart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ marginTop: '6rem' }}>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
