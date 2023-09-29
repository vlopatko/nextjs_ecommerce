import logo from '@/public/Logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex w-full justify-between bg-header py-4 text-white">
      <Image src={logo} alt="Publiq company logo" />
    </header>
  )
}

export default Header
