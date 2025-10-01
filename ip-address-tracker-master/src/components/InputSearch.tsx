import ArrowIcon from '../assets/icon-arrow.svg';
function InputSearch() {
    return (
        <form className="flex items-stretch max-w-[555px] mx-auto">
            <input
                type="text"
                placeholder="Search for any IP address or domain"
                className="bg-white px-6 py-[18px] rounded-s-2xl text-lg w-full placeholder:text-gray-400 outline-none"
            />
            <button
                type="submit"
                className="bg-gray-950 rounded-e-2xl px-6 cursor-pointer">
                <img src={ArrowIcon} alt="arrow icon" />
            </button>
        </form>
    );
}

export default InputSearch;
