import ResultComponent from './ResultComponent';

function ResultCard() {
    return (
        <article className="bg-white px-8 py-10 rounded-2xl max-w-[1100px] mx-auto">
            <div className="grid lg:grid-cols-4 gap-8 lg:*:not-last:border-r lg:*:not-last:border-gray-400">
                <ResultComponent title="ip address" value="192.168.0.0" />
                <ResultComponent title="location" value="Brooklyn, NY 10001" />
                <ResultComponent title="timezone" value="UTC-05:00" />
                <ResultComponent title="isp" value="SpaceX Starlink" />
            </div>
        </article>
    );
}

export default ResultCard;
