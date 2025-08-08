export default function Result({ score }: { score: number }) {
    return (
        <div className="w-[200px] aspect-square rounded-full flex flex-col justify-center items-center bg-gradient-to-b from-violet-blue to-persian-blue font-hanken-grotesk text-white">
            <h2 className="font-extrabold text-7xl">{score}</h2>
            <p className="opacity-75">of 100</p>
        </div>
    );
}
