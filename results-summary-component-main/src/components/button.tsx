export default function Button({ text }: { text: string }) {
    return (
        <div className="font-hanken-grotesk font-bold bg-dark-gray-blue text-white py-4 rounded-full text-center w-full text-lg lg:hover:bg-gradient-to-b lg:hover:from-light-slate-blue lg:hover:to-light-royal-blue lg:cursor-pointer lg:transition-colors lg:ease-in-out lg:duration-200">
            {text}
        </div>
    );
}
