import {Button} from "@/components/ui/button.tsx";

function FooterButton() {
    return (
        <div className='bg-white flex items-center justify-between p-4 w-full'>
            <Button variant='ghost'>Go Back</Button>
            <Button variant='default' size='lg'>Next Step</Button>
        </div>
    );
}

export default FooterButton;