import logo from '@/public/Logo.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-header py-4 w-full text-white flex justify-between">
      <Image src={logo} alt='Publiq company logo' />
    </header>
  )
}

export default Header;
