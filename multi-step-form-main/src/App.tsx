import FooterButton from "@/components/FooterButton.tsx";
import PersonalStep from "@/components/step/PersonalStep.tsx";
import Stepper from "@/components/Stepper.tsx";

const App = () => {
    return (
        <div className='flex flex-col items-center max-lg:py-[100px] h-screen'>
            <Stepper/>
            <div className='z-10'>
                <PersonalStep/>
            </div>
            <div className='fixed bottom-0 left-0 w-full z-20'>
                <FooterButton/>
            </div>
        </div>
    );
};

export default App;