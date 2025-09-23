import { PHILOSOPHY } from '../../../constant/constants';
import List from './List';

function Philosophy() {
    return (
        <div className="grid xl:grid-cols-[1fr_2fr] gap-10 xl:gap-16 py-12 md:py-20 xl:py-24">
            <h2 className="heading-2 text-neutral-900">Our food philosophy</h2>
            <div className="space-y-12">
                {PHILOSOPHY.map(({ title, description }) => (
                    <List key={title} title={title} description={description} />
                ))}
            </div>
        </div>
    );
}

export default Philosophy;
