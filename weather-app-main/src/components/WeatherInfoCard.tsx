function WeatherInfoCard() {
    return (
        <div className="relative h-[286px] w-full flex flex-col items-center overflow-hidden rounded-[20px] max-md:py-[41px] px-6">
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden bg-transparent bg-[url('/images/bg-today-small.svg')] md:bg-[url('/images/bg-today-large.svg')] bg-no-repeat bg-cover bg-center"></div>
            <div className="relative flex flex-col md:flex-row items-center gap-4 md:w-full md:justify-between md:my-auto ">
                <div className="flex flex-col items-center md:items-start gap-3">
                    <h2 className="heading-4 text-neutral-0">
                        Berlin, Germany
                    </h2>
                    <p className="body-lg text-neutral-0/80">
                        Tuesday, Aug 5, 2025
                    </p>
                </div>
                <div className="flex items-center gap-5">
                    <img
                        src="/images/icon-sunny.webp"
                        alt="sunny icon"
                        className="size-[120px]"
                    />
                    <h2 className="heading text-neutral-0">20&deg;</h2>
                </div>
            </div>
        </div>
    );
}

export default WeatherInfoCard;
