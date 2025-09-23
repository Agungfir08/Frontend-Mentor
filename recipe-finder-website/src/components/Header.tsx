import HamburgerIcon from '../assets/icon-hamburger-menu.svg';
import NavLink from './NavLink';
import { useState } from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router';

function Header() {
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    return (
        <header className="  bg-neutral-100 border-b border-neutral-300 sticky top-0 z-10">
            <div className="relative max-w-[1440px] p-4 md:px-8 md:pt-8 md:pb-5 lg:px-[60px] lg:py-5 mx-auto flex items-center justify-between">
                <a href="/">
                    <img
                        src="/images/logo.svg"
                        alt="Logo Icon"
                        className="h-10 w-auto"
                    />
                </a>

                <Button
                    variant="icon"
                    size="icon"
                    rounded="icon"
                    className="lg:hidden"
                    onClick={() => setOpen((prev) => !prev)}>
                    <img src={HamburgerIcon} alt="hamburger menu icon" />
                </Button>

                {open && (
                    <div className="absolute z-20 left-4 right-4 md:left-8 md:right-8 top-[90%] bg-neutral-0 border border-neutral-300 rounded-8 p-2 lg:hidden space-y-2.5">
                        <nav className="flex flex-col items-start">
                            <NavLink label="Home" to="/" />
                            <NavLink label="About" to="/about" />
                            <NavLink label="Recipes" to="/recipes" />
                        </nav>
                        <Button
                            size="lg"
                            className="w-full"
                            onClick={() => navigate('/recipes')}>
                            Browse recipes
                        </Button>
                    </div>
                )}

                <nav className="max-lg:hidden flex items-center gap-10">
                    <NavLink label="Home" to="/" />
                    <NavLink label="About" to="/about" />
                    <NavLink label="Recipes" to="/recipes" />
                </nav>
                <Button
                    size="lg"
                    className="max-lg:hidden"
                    onClick={() => navigate('/recipes')}>
                    Browse recipes
                </Button>
            </div>
        </header>
    );
}

export default Header;
