import Logo from '../assets/images/logo.svg';
import Dropdown from './dropdown';
import SwitchTheme from './switch-theme';

function Header() {
    return (
        <header className="flex items-center justify-between">
            <img src={Logo} alt="logo" className="w-8 h-auto" />
            <div className="flex items-center gap-4 md:gap-6">
                <Dropdown />
                <div className="w-px self-stretch bg-neutral-200"></div>
                <SwitchTheme />
            </div>
        </header>
    );
}

export default Header;
