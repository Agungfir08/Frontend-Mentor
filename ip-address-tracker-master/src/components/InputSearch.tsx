import { useState } from 'react';
import ArrowIcon from '../assets/icon-arrow.svg';

interface InputSearchProps {
    onSearch: (searchTerm: string) => void;
}

function InputSearch({ onSearch }: InputSearchProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form
            className="flex items-stretch max-w-[555px] mx-auto"
            onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for any IP address or domain"
                className="bg-white px-6 py-[18px] rounded-s-2xl text-lg w-full tracking-[0.01rem] placeholder:text-gray-400 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
