import SearchIcon from '/images/icon-search.svg';

function InputSearch() {
    return (
        <div className="relative md:max-w-[320px]">
            <img
                src={SearchIcon}
                alt="search icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 size-5"
            />
            <input
                type="text"
                placeholder="Search by name or ingredient..."
                className="bg-neutral-0 py-2.5 pl-[42px] pr-4 rounded-10 border border-neutral-300 text-body--lg text-neutral-900 w-full outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
            />
        </div>
    );
}

export default InputSearch;
