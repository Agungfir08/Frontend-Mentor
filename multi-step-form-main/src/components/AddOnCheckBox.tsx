import {Label} from "@/components/ui/label.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";

function AddOnCheckBox() {
    return (
        <Label htmlFor='add-on'
               className='flex items-center gap-4 border border-purple-200 px-4 py-3 rounded-md has-[[aria-checked=true]]:bg-blue-300/15 has-[[aria-checked=true]]:outline-purple-600 has-[[aria-checked=true]]:outline'>
            <Checkbox id='add-on' defaultChecked/>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <h3 className='text-blue-950 text-sm font-medium'>Online service</h3>
                    <p className='text-grey-500 text-xs '>Access to multiplayer games</p>
                </div>
                <p className='text-purple-600 text-xs'>+$10/yr</p>
            </div>
        </Label>
    );
}

export default AddOnCheckBox;