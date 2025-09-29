import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

function Layout() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main className="grow max-w-[1440px] mx-auto w-full px-4 md:px-8 lg:px-[124px] pt-10 md:pt-12 lg:pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
