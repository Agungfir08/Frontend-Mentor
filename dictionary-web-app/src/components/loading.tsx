function Loading() {
    const circleClass =
        'absolute w-[1.2rem] h-[1.2rem] bg-[#333] rounded-full bg-neutral-500';

    return (
        <div className="flex justify-center pt-50">
            <div className="relative w-12 h-12 animate-spin-box">
                <div className={`${circleClass} top-0 left-0`} />
                <div className={`${circleClass} top-0 right-0`} />
                <div className={`${circleClass} bottom-0 left-0`} />
                <div className={`${circleClass} bottom-0 right-0`} />
            </div>
        </div>
    );
}

export default Loading;
