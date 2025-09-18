import Header from './Header';

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className=" max-w-[1440px] mx-auto px-4 pt-4 pb-12 md:px-7 md:pt-7 md:pb-20 lg:px-28 lg:pt-12">
            <Header />
            <main className="mt-12 lg:mt-16">{children}</main>
        </div>
    );
}

export default MainLayout;
