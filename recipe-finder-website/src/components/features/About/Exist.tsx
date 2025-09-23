import { EXIST_REASON } from '../../../constant/constants';
import List from './List';

function Exist() {
    return (
        <div className="grid xl:grid-cols-[1fr_2fr] gap-10 xl:gap-16 py-12 md:py-20 xl:py-24">
            <h2 className="heading-2 text-neutral-900">Why we exist</h2>
            <div className="space-y-12">
                {EXIST_REASON.map(({ title, description }) => (
                    <List key={title} title={title} description={description} />
                ))}
            </div>
        </div>
    );
}

export default Exist;
