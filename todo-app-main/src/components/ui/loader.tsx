const Loader = () => {
    const bars = [
        { rotate: 0, delay: '0s' },
        { rotate: 30, delay: '-1.1s' },
        { rotate: 60, delay: '-1s' },
        { rotate: 90, delay: '-0.9s' },
        { rotate: 120, delay: '-0.8s' },
        { rotate: 150, delay: '-0.7s' },
        { rotate: 180, delay: '-0.6s' },
        { rotate: 210, delay: '-0.5s' },
        { rotate: 240, delay: '-0.4s' },
        { rotate: 270, delay: '-0.3s' },
        { rotate: 300, delay: '-0.2s' },
        { rotate: 330, delay: '-0.1s' },
    ];

    return (
        <div className="flex items-center justify-center h-full">
            <style>{`
        @keyframes fade458 {
          from { opacity: 1; }
          to { opacity: 0.25; }
        }
      `}</style>

            <div className="relative w-13.5 h-13.5 rounded-[10px]">
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className="absolute left-1/2 top-[30%] w-[8%] h-[24%] bg-purple-600 dark:bg-purple-300 rounded-[50px] opacity-0 shadow-[0_0_3px_rgba(0,0,0,0.2)]"
                        style={{
                            transform: `rotate(${bar.rotate}deg) translate(0, -130%)`,
                            animation: `fade458 1s linear infinite`,
                            animationDelay: bar.delay,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

// Exporting as default App for the preview environment
export default Loader;
