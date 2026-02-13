import MoonIcon from '../../assets/images/icon-moon.svg';
import SunIcon from '../../assets/images/icon-sun.svg';
import useDarkMode from '../../hook/useDarkMode';
function Heading() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className="flex items-center justify-between">
            <h1 className="uppercase text-white leading-none tracking-[0.5em] font-bold text-2xl md:text-4xl">
                todo
            </h1>
            <button onClick={toggleDarkMode} className="cursor-pointer">
                {isDarkMode ? (
                    <img
                        src={SunIcon}
                        alt="sun icon"
                        className="size-5 md:size-6"
                    />
                ) : (
                    <img
                        src={MoonIcon}
                        alt="moon icon"
                        className="size-5 md:size-6"
                    />
                )}
            </button>
        </div>
    );
}

export default Heading;
