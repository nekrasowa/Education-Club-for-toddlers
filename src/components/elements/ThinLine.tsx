export function ThinLine({ pb }: { pb?: string }) {
  return (
    <div
      className={`line border-t-1 border-blue-900 w-[100%] ${pb ? pb : 'pb-15'}`}
    ></div>
  )
}
