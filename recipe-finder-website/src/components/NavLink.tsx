import clsx from 'clsx';

function NavLink({ label }: { label: string }) {
    return (
        <li
            className={clsx(
                'text-body--lg text-neutral-900 relative lg:before:absolute lg:before:-bottom-0.5 lg:before:left-0 lg:before:right-0 lg:before:h-0.5 lg:before:bg-orange-500 lg:before:rounded-full lg:before:origin-center lg:before:scale-x-0 lg:hover:before:scale-x-100 lg:before:transition-all lg:before:duration-200 lg:before:ease-in-out cursor-pointer max-lg:px-2 max-lg:py-3',
                {
                    'before:scale-x-100': label === 'Home',
                }
            )}>
            {label}
        </li>
    );
}

export default NavLink;
