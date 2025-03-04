import Footer from './_footer'
import Header from './_header'
import { ErrorWrapper } from './error-wrapper'

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
      <body style={{
        margin: 0
      }}>
        <Header />
        <ErrorWrapper>
        <div style={{ position: 'relative' }}>{children}</div>
        </ErrorWrapper>
        <Footer />
      </body>
    </html>
  )
}
