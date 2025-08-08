import Result from '../components/result';

export default function ResultCard() {
    return (
        <div className="bg-white w-full md:max-w-[375px] md:rounded-l-3xl">
            <div className="flex flex-col items-center gap-7 bg-gradient-to-b from-light-slate-blue to-light-royal-blue font-hanken-grotesk text-center py-7 px-16 rounded-b-4xl md:rounded-3xl">
                <span className="text-2xl text-white/75 font-bold">
                    Your Result
                </span>
                <Result score={76} />
                <div>
                    <h3 className="font-extrabold text-[32px] text-white">
                        Great
                    </h3>
                    <p className="text-white/75">
                        You scored higher than 70% of the people who have taken
                        these tests.
                    </p>
                </div>
            </div>
        </div>
    );
}
