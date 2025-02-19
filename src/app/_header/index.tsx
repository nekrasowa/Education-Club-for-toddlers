import Link from 'next/link'


export default function Header() {
  return (
    <header
      style={{
        backgroundColor: '#4e9c4e',
        padding: '2rem',
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <p>Menu</p>
      <li><Link href='/profile'>Profile</Link></li>
      <li><Link href='/folders'>Folders</Link></li>
      <li><Link href='/about'>About</Link></li>
    </header>
  )
}
