import { Button } from './ui/button';
import { Input } from './ui/input';

function InputSearch() {
    return (
        <div className="w-full max-w-[526px] mx-auto">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
                <div className="relative w-full">
                    <img
                        src="/images/icon-search.svg"
                        alt="icon seacrh"
                        className="absolute size-5 top-1/2 -translate-y-1/2 left-6 text-slate-600"
                    />

                    <Input
                        type="text"
                        placeholder="Search for a place..."
                        className="pl-[60px]"
                    />
                </div>

                <Button variant="secondary" className="max-md:w-full">
                    Search
                </Button>
            </div>
        </div>
    );
}

export default InputSearch;
