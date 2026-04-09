export function H2Title({
  title,
  addedClassName = '',
}: {
  title: string
  addedClassName?: string
}) {
  return (
    <h2
      className={`classesTitle text-2xl text-center py-20 text-[#09246c] ${addedClassName}`}
    >
      {title}
    </h2>
  )
}
