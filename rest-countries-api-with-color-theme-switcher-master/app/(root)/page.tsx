import { DropDownButton } from '@/components/button';
import { SearchInput } from '@/components/input';

export default function Home() {
    return (
        <div className="py-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12 md:gap-5">
                <SearchInput />
                <DropDownButton
                    items={[
                        { title: 'Africa' },
                        { title: 'America' },
                        { title: 'Asia' },
                        { title: 'Europe' },
                        { title: 'Oceania' },
                    ]}
                />
            </div>
        </div>
    );
}
