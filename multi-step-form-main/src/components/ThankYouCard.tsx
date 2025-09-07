import ThanksIcon from '../assets/icon-thank-you.svg'

function ThankYouCard() {
    return (
        <div className='bg-white flex flex-col items-center justify-center gap-3.5 rounded-lg max-w-[343px] px-6 py-20'>
            <img src={ThanksIcon} alt="thank you icon"/>
            <h2 className='text-2xl font-bold text-blue-950'>Thank you!</h2>
            <p className='text-grey-500 text-center'>Thank for confirming your subscription! We hope you have fun using
                our
                platform. If you ever
                need
                support, please feel free to email us at support@loremgaming.com</p>
        </div>
    );
}

export default ThankYouCard;