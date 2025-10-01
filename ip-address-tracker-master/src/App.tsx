import InputSearch from './components/InputSearch';
import ResultCard from './components/ResultCard';

function App() {
    return (
        <main className="relative">
            <picture>
                <source
                    srcSet="/images/pattern-bg-desktop.png"
                    media="(width>=768px)"
                />
                <img
                    src="/images/pattern-bg-mobile.png"
                    alt="background image"
                    className="w-full h-auto object-cover"
                />
            </picture>
            <div className="absolute top-8 left-0 right-0 space-y-12">
                <div className="space-y-7">
                    <h1 className="text-[32px] font-semibold -tracking-tight text-white text-center">
                        IP Address Tracker
                    </h1>
                    <InputSearch />
                </div>
                <ResultCard />
            </div>
        </main>
    );
}

export default App;
