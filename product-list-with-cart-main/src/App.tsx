import data from '../data.json';
import DesertCard from './components/desertCard';
import CartCard from './components/cartCard';
import { cartContext } from './context/cartContext';
import { useContext } from 'react';
import ModalCard from './components/modalCard';

export default function App() {
    const { isModalOpen } = useContext(cartContext);
    return (
        <main className="w-full min-h-dvh max-w-7xl mx-auto p-6 flex flex-col gap-7 md:flex-row">
            <section className="md:basis-2/3">
                <h1 className=" font-bold text-4.5xl text-rose-900 mb-2.5">
                    Desert
                </h1>
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {data.map((desert, idx) => (
                        <DesertCard
                            key={idx}
                            name={desert.name}
                            category={desert.category}
                            price={desert.price}
                            image={{
                                desktop: desert.image.desktop,
                                tablet: desert.image.tablet,
                                mobile: desert.image.mobile,
                                thumbnail: desert.image.thumbnail,
                            }}
                        />
                    ))}
                </div>
            </section>
            <aside className="md:basis-1/3">
                <CartCard />
            </aside>
            {isModalOpen && <ModalCard />}
        </main>
    );
}
