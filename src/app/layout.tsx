import './globals.css'

import { Chat } from '@/components/ui/Chat'
import { ContactBoard } from '@/components/ui/ContactBoard'
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
    <html >
      <body
        style={{
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        <HeaderContainer />
        <div
          style={{
            position: 'relative',
          }}
        >
          {children}
        </div>
        <ContactBoard />
        <Chat />
      </body>
    </html>
  )
}
