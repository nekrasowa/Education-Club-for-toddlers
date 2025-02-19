export default async function FolderById({params}: {params: Promise<{folderId: string}>}) {
  const folderId = (await params).folderId
  return <h1>Folder {folderId}</h1>
}
