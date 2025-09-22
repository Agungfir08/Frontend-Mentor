import ArrowIcon from '/images/icon-bullet-point.svg';
function List({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex items-start gap-5">
            <img src={ArrowIcon} alt="arrow icon" />
            <div className="space-y-3">
                <h3 className="text-body--2xl text-neutral-900">{title}</h3>
                <p className="text-body--xl--sans text-neutral-600">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default List;
