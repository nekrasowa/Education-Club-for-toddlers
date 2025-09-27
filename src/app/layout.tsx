import './globals.css'

import { Chat } from '@/components/ui/Chat'
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
    <html lang="en">
      <body
        style={{
          margin: 0,
        }}
      >
        <HeaderContainer />
        <div style={{ position: 'relative' }}>{children}</div>
        <Chat />
      </body>
    </html>
  )
}
