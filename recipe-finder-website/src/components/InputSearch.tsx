import { Input } from './ui/input';
import SearchIcon from '/images/icon-search.svg';

function InputSearch() {
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
            />
        </div>
    );
}

export default InputSearch;
