import EmptyIcon from '../assets/images/illustration-empty.svg';

export default function Empty() {
    return (
        <div className="space-y-4 p-9">
            <img src={EmptyIcon} alt="empty icon" className="mx-auto" />
            <h2 className="text-2xl font-bold text-white text-center">
                Results shown here
            </h2>
            <p className="text-base font-medium text-slate-500 text-center">
                Complete the form and click "calculate repayments" to see what
                your monthly repayments would be.
            </p>
        </div>
    );
}
