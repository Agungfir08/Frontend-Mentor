import { useSearchParams } from 'react-router';
import { Input } from './ui/input';
import SearchIcon from '/images/icon-search.svg';

function InputSearch() {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get('search') || '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        const newParams = new URLSearchParams(searchParams);
        if (value) {
            newParams.set('search', value);
            newParams.set('page', '1');
        } else {
            newParams.delete('search');
            newParams.set('page', '1');
        }
        setSearchParams(newParams);
    };
    return (
        <div className="relative w-full md:max-w-[320px]">
            <img
                src={SearchIcon}
                alt="search icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 size-5"
            />
            <Input
                type="text"
                placeholder="Search by name or ingridient..."
                className="pl-[42px]"
                onChange={handleChange}
                value={search}
            />
        </div>
    );
}

export default InputSearch;
