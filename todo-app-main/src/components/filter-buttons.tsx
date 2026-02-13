import UseTodos from '../hook/useTodos';
import RadioButton from './ui/radio-button';

function FilterButton() {
    const { activeFilter, handleChangeFilter } = UseTodos();
    return (
        <div className="flex items-center justify-center gap-4">
            <RadioButton
                label="all"
                name="filter"
                value="all"
                checked={activeFilter === 'all'}
                onChange={handleChangeFilter}
            />
            <RadioButton
                label="active"
                name="filter"
                value="active"
                checked={activeFilter === 'active'}
                onChange={handleChangeFilter}
            />
            <RadioButton
                label="completed"
                name="filter"
                value="completed"
                checked={activeFilter === 'completed'}
                onChange={handleChangeFilter}
            />
        </div>
    );
}

export default FilterButton;
