import Link from 'next/link'

export default function Folders() {
  const folderNumber = 100
  return (
    <>
      <h1>All folders!</h1>
      <h2>
        <Link href={`Folder 1`}>Folder 1</Link>
      </h2>
      <h2>
        <Link href={`Folder 2`}>Folder 2</Link>
      </h2>
      <h2>
        <Link href={`Folder 3`}>Folder 3</Link>
      </h2>
      <h2>
        <Link href={`Folder ${folderNumber}`}>Folder {`${folderNumber}`}</Link>
      </h2>
    </>
  )
}
