import FooterButton from "@/components/FooterButton.tsx";
import ThankYouCard from "@/components/ThankYouCard.tsx";
import PersonalStep from "@/components/step/PersonalStep.tsx";
import PlanStep from "@/components/step/PlanStep.tsx";
import AddOnStep from "@/components/step/AddOnStep.tsx";
import SummaryStep from "@/components/step/SummaryStep.tsx";

const App = () => {
    return (
        <div className='space-y-4 flex flex-col items-center'>
            <SummaryStep/>
            <AddOnStep/>
            <PlanStep/>
            <PersonalStep/>
            <ThankYouCard/>
            <FooterButton/>
        </div>
    );
};

export default App;