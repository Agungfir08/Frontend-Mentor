import InstagramIcon from '../assets/icon-instagram.svg';
import TiktokIcon from '../assets/icon-tiktok.svg';
import BlueSkyIcon from '../assets/icon-bluesky.svg';

function Footer() {
    return (
        <div className="sticky bottom-0 max-w-[1192px] mx-auto w-full max-md:px-4 max-md:pt-8 max-md:pb-5 max-[1440px]:px-8 max-[1440px]:py-10 flex max-md:flex-col-reverse max-md:gap-6 items-center md:justify-between">
            <p className="text-body--base-medium text-neutral-900">
                Made with ❤️ and 🥑
            </p>
            <div className="flex items-center gap-6">
                <a href="#">
                    <img src={InstagramIcon} alt="instagram Icon" />
                </a>
                <a href="#">
                    <img src={TiktokIcon} alt="tiktok Icon" />
                </a>
                <a href="#">
                    <img src={BlueSkyIcon} alt="bluesky Icon" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
