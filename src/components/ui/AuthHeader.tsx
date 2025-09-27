import Link from 'next/link'
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined'

export function AuthHeader() {
  // receive from BD
  return (
    <div className="bg-blue-950 relative flex flex-row-reverse items-center justify-between text-white p-4">
      <div className="text-xl absolute  left-1/2 transform -translate-x-1/2 max-w-[80%] truncate text-center" >
        <span>Our last news</span>
        <Link className='underline underline-offset-2 pl-2' href='/'>More info</Link>
      </div>
      <div className="z-1">
        <UserOutlined className='border-2 border-solid rounded-3xl p-1'/>
        <Link href='/' className='pl-2'>Log in</Link>
      </div>
    </div>
  )
}
