import logo from '@/public/Logo.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-header py-4 w-full text-white flex justify-between">
      <div className="container">
        <Image src={logo} alt='Publiq company logo' />
      </div>
    </header>
  )
}

export default Header;
