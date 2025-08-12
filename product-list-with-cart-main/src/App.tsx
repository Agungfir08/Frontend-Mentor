import DesertCard from './components/desertCard';
import CartCard from './components/cartCard';
import { cartContext } from './context/cartContext';
import { useContext } from 'react';
import ModalCard from './components/modalCard';

const data = [
    {
        image: {
            thumbnail: '../public/images/image-waffle-thumbnail.jpg',
            mobile: '../public/images/image-waffle-mobile.jpg',
            tablet: '../public/images/image-waffle-tablet.jpg',
            desktop: '../public/images/image-waffle-desktop.jpg',
        },
        name: 'Waffle with Berries',
        category: 'Waffle',
        price: 6.5,
    },
    {
        image: {
            thumbnail: '../public/images/image-creme-brulee-thumbnail.jpg',
            mobile: '../public/images/image-creme-brulee-mobile.jpg',
            tablet: '../public/images/image-creme-brulee-tablet.jpg',
            desktop: '../public/images/image-creme-brulee-desktop.jpg',
        },
        name: 'Vanilla Bean Crème Brûlée',
        category: 'Crème Brûlée',
        price: 7.0,
    },
    {
        image: {
            thumbnail: '../public/images/image-macaron-thumbnail.jpg',
            mobile: '../public/images/image-macaron-mobile.jpg',
            tablet: '../public/images/image-macaron-tablet.jpg',
            desktop: '../public/images/image-macaron-desktop.jpg',
        },
        name: 'Macaron Mix of Five',
        category: 'Macaron',
        price: 8.0,
    },
    {
        image: {
            thumbnail: '../public/images/image-tiramisu-thumbnail.jpg',
            mobile: '../public/images/image-tiramisu-mobile.jpg',
            tablet: '../public/images/image-tiramisu-tablet.jpg',
            desktop: '../public/images/image-tiramisu-desktop.jpg',
        },
        name: 'Classic Tiramisu',
        category: 'Tiramisu',
        price: 5.5,
    },
    {
        image: {
            thumbnail: '../public/images/image-baklava-thumbnail.jpg',
            mobile: '../public/images/image-baklava-mobile.jpg',
            tablet: '../public/images/image-baklava-tablet.jpg',
            desktop: '../public/images/image-baklava-desktop.jpg',
        },
        name: 'Pistachio Baklava',
        category: 'Baklava',
        price: 4.0,
    },
    {
        image: {
            thumbnail: '../public/images/image-meringue-thumbnail.jpg',
            mobile: '../public/images/image-meringue-mobile.jpg',
            tablet: '../public/images/image-meringue-tablet.jpg',
            desktop: '../public/images/image-meringue-desktop.jpg',
        },
        name: 'Lemon Meringue Pie',
        category: 'Pie',
        price: 5.0,
    },
    {
        image: {
            thumbnail: '../public/images/image-cake-thumbnail.jpg',
            mobile: '../public/images/image-cake-mobile.jpg',
            tablet: '../public/images/image-cake-tablet.jpg',
            desktop: '../public/images/image-cake-desktop.jpg',
        },
        name: 'Red Velvet Cake',
        category: 'Cake',
        price: 4.5,
    },
    {
        image: {
            thumbnail: '../public/images/image-brownie-thumbnail.jpg',
            mobile: '../public/images/image-brownie-mobile.jpg',
            tablet: '../public/images/image-brownie-tablet.jpg',
            desktop: '../public/images/image-brownie-desktop.jpg',
        },
        name: 'Salted Caramel Brownie',
        category: 'Brownie',
        price: 4.5,
    },
    {
        image: {
            thumbnail: '../public/images/image-panna-cotta-thumbnail.jpg',
            mobile: '../public/images/image-panna-cotta-mobile.jpg',
            tablet: '../public/images/image-panna-cotta-tablet.jpg',
            desktop: '../public/images/image-panna-cotta-desktop.jpg',
        },
        name: 'Vanilla Panna Cotta',
        category: 'Panna Cotta',
        price: 6.5,
    },
];

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
