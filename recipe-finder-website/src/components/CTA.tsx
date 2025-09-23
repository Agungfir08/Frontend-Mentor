import { useNavigate } from 'react-router';
import { Button } from './button';
import ForkIcon from '/images/pattern-fork.svg';
import KnifeIcon from '/images/pattern-knife.svg';

function CTA() {
    const navigate = useNavigate();
    return (
        <section className="relative bg-neutral-200 py-12 max-md:px-4 md:py-20 xl:py-24  rounded-16 overflow-hidden">
            <img
                src={ForkIcon}
                alt="fork illustration"
                className="absolute max-lg:w-[180px] max-md:hidden max-lg:h-auto -left-10 -bottom-9 lg:-left-20 lg:-bottom-8 "
            />
            <img
                src={KnifeIcon}
                alt="knife illustration"
                className="absolute max-lg:w-[172px] max-md:hidden max-lg:h-auto right-0 -top-14 lg:-right-20 lg:top-0 "
            />
            <div className="flex flex-col gap-8 md:gap-10 items-center relative z-10">
                <div className="space-y-3 text-center">
                    <h2 className="heading-2 text-neutral-900">
                        Ready to cook smarter?
                    </h2>
                    <p className="text-body--xl--sans text-neutral-600">
                        Hit the button, pick a recipe, and get dinner on the
                        table—fast.
                    </p>
                </div>
                <Button onClick={() => navigate('/recipes')}>
                    Browse recipes
                </Button>
            </div>
        </section>
    );
}

export default CTA;
