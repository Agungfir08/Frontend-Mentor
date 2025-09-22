import { Button } from './button';
import HamburgerIcon from '../assets/icon-hamburger-menu.svg';
import NavLink from './NavLink';
import { useState } from 'react';

function Header() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <header className="max-w-[1440px] mx-auto  p-4 md:px-8 md:pt-8 md:pb-5 lg:px-[60px] lg:py-5 bg-neutral-100 border-b border-neutral-300 sticky top-0 z-10">
            <div className="relative flex items-center justify-between">
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
                    className="lg:hidden"
                    onClick={() => setOpen((prev) => !prev)}>
                    <img src={HamburgerIcon} alt="hamburger menu icon" />
                </Button>

                {open && (
                    <div className="absolute z-20 left-0 right-0 top-[125%] bg-neutral-0 border border-neutral-300 rounded-8 p-2 lg:hidden space-y-2.5">
                        <nav>
                            <ul className="flex flex-col items-start">
                                <NavLink label="Home" />
                                <NavLink label="About" />
                                <NavLink label="Recipes" />
                            </ul>
                        </nav>
                        <Button size="normal" className="w-full">
                            Browse recipes
                        </Button>
                    </div>
                )}

                <nav className="max-lg:hidden">
                    <ul className="flex items-center gap-10">
                        <NavLink label="Home" />
                        <NavLink label="About" />
                        <NavLink label="Recipes" />
                    </ul>
                </nav>
                <Button size="normal" className="max-lg:hidden">
                    Browse recipes
                </Button>
            </div>
        </header>
    );
}

export default Header;
