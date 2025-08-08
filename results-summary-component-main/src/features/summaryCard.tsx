import data from '../../data.json';
import Button from '../components/button';
import ListSummary from '../components/listSummary';

type Category = 'Reaction' | 'Memory' | 'Verbal' | 'Visual';

export default function SummaryCard() {
    return (
        <div className="flex flex-col gap-6 bg-white p-7 w-full md:rounded-r-3xl md:max-w-[375px]">
            <h2 className="font-hanken-grotesk font-bold text-lg">Summary</h2>
            <div className="flex flex-col gap-4">
                {data.map((item, index) => (
                    <ListSummary
                        key={index}
                        type={item.category as Category}
                        value={item.score}
                    />
                ))}
            </div>
            <Button text="Continue" />
        </div>
    );
}
