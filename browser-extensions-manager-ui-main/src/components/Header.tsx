import { Logo } from '../assets/logo';
import SunIcon from '../assets/icon-sun.svg';
import MoonIcon from '../assets/icon-moon.svg';
import Button from './Button';
import useExtensionContext from '../hook/useExtensionContext';

function Header() {
    const { darkMode, changeDarkMode } = useExtensionContext();

    return (
        <header className="bg-neutral-0 dark:bg-neutral-800 px-4 py-3 rounded-3xl flex items-center justify-between">
            <Logo />
            <Button variant="icon" onClick={changeDarkMode}>
                <img src={darkMode ? SunIcon : MoonIcon} alt="Sun Icon" />
            </Button>
        </header>
    );
}

export default Header;
