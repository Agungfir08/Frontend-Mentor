import ReactionIcon from '../assets/images/icon-reaction.svg';
import MemoryIcon from '../assets/images/icon-memory.svg';
import VerbalIcon from '../assets/images/icon-verbal.svg';
import VisualIcon from '../assets/images/icon-visual.svg';

type Category = 'Reaction' | 'Memory' | 'Verbal' | 'Visual';

interface ListSummaryProps {
    type: Category;
    value: number;
}

export default function ListSummary({ type, value }: ListSummaryProps) {
    let className = '';
    let icon = '';

    if (type === 'Reaction') {
        className = 'bg-light-red/5 text-light-red';
        icon = ReactionIcon;
    } else if (type === 'Memory') {
        className = 'bg-orangey-yellow/5 text-orangey-yellow';
        icon = MemoryIcon;
    } else if (type === 'Verbal') {
        className = 'bg-green-teal/5 text-green-teal';
        icon = VerbalIcon;
    } else if (type === 'Visual') {
        className = 'bg-cobalt-blue/5 text-cobalt-blue';
        icon = VisualIcon;
    }

    return (
        <div
            className={`flex justify-between items-center p-4 rounded-xl font-hanken-grotesk font-bold ${className}`}>
            <div className="flex items-center gap-3.5">
                <img src={icon} alt={`${type} icon`} className="w-5 h-auto" />
                <h3 className="text-base">{type}</h3>
            </div>
            <p className="text-dark-gray-blue">
                {value} <span className="text-dark-gray-blue/50">/ 100</span>
            </p>
        </div>
    );
}
