import FooterButton from "@/components/FooterButton.tsx";
import Stepper from "@/components/Stepper.tsx";
import StepCard from "@/components/StepCard.tsx";

const App = () => {
    return (
        <div className='flex flex-col items-center max-lg:py-[100px] h-screen'>
            <Stepper/>
            <div className='z-10 w-full max-w-[343px]'>
                <StepCard/>
            </div>
            <div className='fixed bottom-0 left-0 w-full z-20'>
                <FooterButton/>
            </div>
        </div>
    );
};

export default App;