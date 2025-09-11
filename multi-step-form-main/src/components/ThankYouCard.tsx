import ThanksIcon from '../assets/icon-thank-you.svg';

function ThankYouCard() {
    return (
        <div className="bg-white flex flex-col items-center justify-center gap-[22px] lg:gap-8 rounded-lg max-lg:max-w-[343px] w-full max-lg:px-6 max-lg:py-20">
            <img src={ThanksIcon} alt="thank you icon" />
            <div className="space-y-3.5 lg:space-y-4 text-center">
                <h2 className="text-2xl lg:text-[32px] lg:tracking-wide font-bold text-blue-950">
                    Thank you!
                </h2>
                <p className="text-grey-500 ">
                    Thank for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel
                    free to email us at support@loremgaming.com
                </p>
            </div>
        </div>
    );
}

export default ThankYouCard;
