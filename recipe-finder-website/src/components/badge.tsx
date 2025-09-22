function Badge({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-orange-500 px-1.5 py-0.5 rounded-6 w-fit">
            <span className="text-body--xl text-neutral-900">{children}</span>
        </div>
    );
}

export default Badge;
