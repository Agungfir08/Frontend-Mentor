interface IconFeatureCardProps {
    src: string;
    alt: string;
}
function IconFeatureCard({ src, alt }: IconFeatureCardProps) {
    return (
        <div className="bg-neutral-0 px-2 py-1 rounded-12 size-[60px] inline-flex justify-center items-center">
            <img src={src} alt={alt} />
        </div>
    );
}

export default IconFeatureCard;
