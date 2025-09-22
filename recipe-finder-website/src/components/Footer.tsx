import InstagramIcon from '../assets/icon-instagram.svg';
import TiktokIcon from '../assets/icon-tiktok.svg';
import BlueSkyIcon from '../assets/icon-bluesky.svg';

function Footer() {
    return (
        <footer className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[124px] pt-8 md:py-10 max-md:pb-5 flex max-md:flex-col-reverse max-md:gap-6 items-center md:justify-between">
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
        </footer>
    );
}

export default Footer;
