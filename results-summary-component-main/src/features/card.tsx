import ResultCard from './resultCard';
import SummaryCard from './summaryCard';

export default function Card() {
    return (
        <div className="flex flex-col items-center md:flex-row w-full md:justify-center">
            <ResultCard />
            <SummaryCard />
        </div>
    );
}
