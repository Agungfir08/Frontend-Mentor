import Link from 'next/link';
import { DarkModeButton } from './button';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="flex justify-between items-center text-gray-950 dark:bg-blue-900 dark:text-white wrapper py-9">
                <Link
                    href="/"
                    className="text-lg font-extrabold tracking-tight">
                    Where in the world?
                </Link>
                <DarkModeButton />
            </div>
        </header>
    );
}
