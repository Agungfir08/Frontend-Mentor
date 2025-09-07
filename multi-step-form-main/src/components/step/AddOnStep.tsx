import CardStep from "@/components/CardStep.tsx";
import AddOnCheckBox from "@/components/AddOnCheckBox.tsx";

function AddOnStep() {
    return (
        <CardStep title='Pick add-ons' description='Add-ons help enhance your gaming experience.'>
            <div className='space-y-3.5'>
                <AddOnCheckBox/>
                <AddOnCheckBox/>
                <AddOnCheckBox/>
            </div>
        </CardStep>
    );
}

export default AddOnStep;