import { Logo } from '../assets/logo';
import SunIcon from '../assets/icon-sun.svg';
import Button from './Button';

function Header() {
    return (
        <header className="bg-neutral-800 px-4 py-3 rounded-3xl flex items-center justify-between">
            <Logo />
            <Button variant="icon">
                <img src={SunIcon} alt="Sun Icon" />
            </Button>
        </header>
    );
}

export default Header;
