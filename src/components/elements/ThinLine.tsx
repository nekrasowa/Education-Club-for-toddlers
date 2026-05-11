export function ThinLine({ pb }: { pb?: string }) {
  return (
    <div className={`line border-t border-blue-900 w-[100%] ${pb ? pb : 'pb-10'} `}></div>
  )
}
