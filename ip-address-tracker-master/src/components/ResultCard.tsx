import ResultComponent from './ResultComponent';
interface ResultCardProps {
    data: IpInformationData | undefined;
}
function ResultCard({ data }: ResultCardProps) {
    return (
        <article className="bg-white px-8 py-[26px] md:py-10 rounded-2xl max-w-[1100px] mx-auto shadow-md">
            <div className="grid md:grid-cols-4 gap-6 md:gap-8 md:*:not-last:border-r md:*:not-last:border-gray-400">
                <ResultComponent title="ip address" value={data?.ip ?? '-'} />
                <ResultComponent
                    title="location"
                    value={
                        data?.location
                            ? `${data.location.city}, ${data.location.country}`
                            : '-'
                    }
                />
                <ResultComponent
                    title="timezone"
                    value={
                        data?.location ? `UTC${data.location.timezone}` : '-'
                    }
                />
                <ResultComponent title="isp" value={data?.isp ?? '-'} />
            </div>
        </article>
    );
}

export default ResultCard;
