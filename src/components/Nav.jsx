import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';

export const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Contact Us</li>
                <li>Sign in</li>
            </ul>
        </nav>
    </header>
  );
};
