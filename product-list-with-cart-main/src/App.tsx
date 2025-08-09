import data from '../data.json';
import DesertCard from './components/desertCard';
import CartCard from './components/cartCard';

export default function App() {
    return (
        <main className="min-h-dvh min-w-dvw bg-rose-50">
            <div className=" max-w-7xl mx-auto p-6">
                <div className="flex flex-col gap-7 md:flex-row">
                    <div className="md:basis-2/3">
                        <h1 className="font-red-hat font-bold text-4.5xl text-rose-900">
                            Desert
                        </h1>
                        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                            {data.map((desert, idx) => (
                                <DesertCard
                                    key={idx}
                                    name={desert.name}
                                    category={desert.category}
                                    price={desert.price}
                                    image={desert.image.desktop}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="md:basis-1/3">
                        <CartCard />
                    </div>
                </div>
            </div>
        </main>
    );
}
