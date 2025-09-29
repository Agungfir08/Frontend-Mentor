import List from './List';

interface RecipeSectionListProps {
    title: string;
    items: string[];
}

function RecipeSectionList({ title, items }: RecipeSectionListProps) {
    return (
        <div className="space-y-4">
            <h3 className="text-body--2xl text-neutral-900">{title}:</h3>
            <div className="space-y-2">
                {items.map((item, idx) => (
                    <List key={idx} description={item} />
                ))}
            </div>
        </div>
    );
}

export default RecipeSectionList;
