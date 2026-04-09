export function ThinLine({ pb = 15 }: { pb?: number }) {
  const newPb = `pb-${pb}`
  console.log('newPb:', newPb, '>>> pb:', pb)
  return (
    <div
      className={`line border-t-1 border-blue-900 w-[100%] ${newPb}`}
    ></div>
  )
}
