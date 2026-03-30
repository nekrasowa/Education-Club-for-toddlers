import './globals.css'

import { Chat } from '@/components/ui/Chat'
import { ContactForm } from '@/components/ui/ContactForm'
import { HeaderContainer } from '@/components/containers/HeaderContainer'

export const metadata = {
  title: '',
  description: '',
}
/// шрифты, метаданные

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        style={{
          margin: 0,
        }}
      >
        <HeaderContainer />
        <div
          style={{
            position: 'relative',
            marginLeft: '10%',
            marginRight: '10%',
          }}
        >
          {children}
        </div>
        <ContactForm />
        <Chat />
      </body>
    </html>
  )
}
