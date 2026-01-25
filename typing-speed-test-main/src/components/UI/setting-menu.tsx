import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/UI/dropdown-menu';
import { Button } from '@/components/UI/button.tsx';
import DownArrowIcon from '@/assets/images/icon-down-arrow.svg';

interface SettingsMenuProps<T extends string> {
    title: string;
    value: T;
    options: readonly MenuOption<T>[];
    onChange: (value: T) => void;
}

function SettingMenu<T extends string>({
    title,
    value,
    options,
    onChange,
}: SettingsMenuProps<T>) {
    return (
        <div className={'flex items-center gap-2.5'}>
            <h3
                className={
                    'not-md:hidden text-preset-five text-neutral-400 capitalize'
                }>
                {title}:
            </h3>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild className={'group'}>
                    <Button
                        variant={'outline'}
                        text={'small'}
                        size={'sm'}
                        className={'text-neutral-0 not-md:w-full'}>
                        <span className={'capitalize'}>{value}</span>
                        <img
                            src={DownArrowIcon}
                            alt="down-arrow"
                            className={
                                'group-data-[state=open]:rotate-180 transition-transform duration-300 ease-in-out'
                            }
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className={'w-60 md:w-fit py-2.5 rounded-md'}
                    align={'start'}>
                    <DropdownMenuRadioGroup
                        value={value}
                        onValueChange={(val) => onChange(val as T)}>
                        {options.map(({ label, value }) => (
                            <div key={value} className={'group'}>
                                <DropdownMenuRadioItem value={value}>
                                    {label}
                                </DropdownMenuRadioItem>
                                <DropdownMenuSeparator
                                    className={'group-last:hidden'}
                                />
                            </div>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default SettingMenu;
