interface SliderProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Slider({ value, onChange }: SliderProps) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <h3 className="text-grey-200 text-preset-four md:text-lg">
                    Character Length
                </h3>
                <span className="text-green-200 text-preset-two md:text-[32px]">
                    {value}
                </span>
            </div>
            <input
                type="range"
                min="0"
                max="20"
                value={value}
                onChange={onChange}
                style={{
                    background: `linear-gradient(to right, #a4ffaf ${(value / 20) * 100}%, #08070b ${(value / 20) * 100}%)`,
                }}
                className={`
        w-full h-2 rounded-full appearance-none cursor-pointer
        
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:size-7
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-grey-200
        [&::-webkit-slider-thumb]:transition-colors
        active:[&::-webkit-slider-thumb]:bg-grey-950
        active:[&::-webkit-slider-thumb]:border-2
        active:[&::-webkit-slider-thumb]:border-green-200

        [&::-moz-range-thumb]size-7
        [&::-moz-range-thumb]:rounded-full 
        [&::-moz-range-thumb]:bg-gray-200
        [&::-moz-range-thumb]:transition-colors
        active:[&::-moz-range-thumb]:bg-grey-950
        active:[&::-moz-range-thumb]:border-2
        active:[&::-moz-range-thumb]:border-green-200
      `}
            />
        </div>
    );
}

export default Slider;
