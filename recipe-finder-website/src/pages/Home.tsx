import CTA from '../components/CTA';
import Features from '../components/features/Home/Features';
import Hero from '../components/features/Home/Hero';
import RealLife from '../components/features/Home/RealLife';

function Home() {
    return (
        <div className="space-y-16 md:space-y-20 xl:space-y-24">
            <Hero />
            <Features />
            <RealLife />
            <CTA />
        </div>
    );
}

export default Home;
