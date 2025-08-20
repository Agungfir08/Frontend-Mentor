import Link from 'next/link';
import { DarkModeButton } from './button';

export default function Header() {
    return (
        <header className="bg-white dark:bg-blue-900 shadow-md">
            <div className="flex justify-between items-center text-gray-950  dark:text-white wrapper py-9 md:py-16 lg:py-6">
                <Link
                    href="/"
                    className="text-lg md:text-[28px] lg:text-2xl font-extrabold tracking-tight">
                    Where in the world?
                </Link>
                <DarkModeButton />
            </div>
        </header>
    );
}
