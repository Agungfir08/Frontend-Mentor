import ArrowIcon from '/images/icon-bullet-point.svg';
function List({ description }: { description: string }) {
    return (
        <div className="flex items-center gap-5">
            <img src={ArrowIcon} alt="arrow icon" className="size-6" />
            <p className="text-body--xl--sans text-neutral-600">
                {description}
            </p>
        </div>
    );
}

export default List;
