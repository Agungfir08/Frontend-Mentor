import Header from './components/Header';
import RadioButton from './components/RadioButton';
import data from '../data.json';
import ExtensionCard from './components/ExtensionCard';

function App() {
    return (
        <main className="max-w-[1440px] mx-auto px-4 py-6 xl:px-[135px] xl:py-10">
            <Header />
            <div className="mt-9 lg:mt-16 mb-8 flex flex-col lg:flex-row max-lg:gap-[18px] items-center justify-between">
                <h1 className="font-bold text-[32px] text-neutral-900 dark:text-neutral-100">
                    Extensions List
                </h1>
                <fieldset className="space-x-3">
                    <legend className="sr-only">Filter Button</legend>
                    <RadioButton text="All" id="filter-all" checked />
                    <RadioButton text="Active" id="filter-active" />
                    <RadioButton text="Inactive" id="filter-inactive" />
                </fieldset>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                {data.map(({ name, description, logo }) => (
                    <ExtensionCard
                        key={name}
                        image={logo}
                        name={name}
                        description={description}
                    />
                ))}
            </div>
        </main>
    );
}

export default App;
