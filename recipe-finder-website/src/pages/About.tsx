import CTA from '../components/CTA';
import BeyondThePlate from '../components/features/About/BeyondThePlate';
import Exist from '../components/features/About/Exist';
import Mission from '../components/features/About/Mission';
import Philosophy from '../components/features/About/Philosophy';

function About() {
    return (
        <div>
            <Mission />
            <Exist />
            <Philosophy />
            <BeyondThePlate />
            <CTA />
        </div>
    );
}

export default About;
