
import { notFound } from 'next/navigation'


export default async function ModuleById({
  params,
}: {
  params: Promise<{ folderId: string; moduleId: string }>
}) {
  const { moduleId, folderId } = await params

  if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(moduleId)) {
    notFound()
  }

  return (
    <h1>
      Module {moduleId} in folder {folderId}
    </h1>
  )
}
