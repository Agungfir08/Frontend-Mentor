import Logo from '@/assets/images/logo-large.svg';
import LogoSmall from '@/assets/images/logo-small.svg';
import TrophyIcon from '@/assets/images/icon-personal-best.svg';
import { useTypingStore } from '@/store/store';
import GameHistory from './game-history';
import { memo } from 'react';

function Header() {
    const history = useTypingStore((s) => s.history);

    const highestWPM = history.reduce(
        (prev, current) => Math.max(prev, current.wpm),
        0,
    );

    return (
        <header className={'flex items-center justify-between'}>
            {/*--Logo--*/}
            <div className={'not-md:hidden'}>
                <img src={Logo} alt={'logo'} />
            </div>
            <div className={'md:hidden'}>
                <img src={LogoSmall} alt={'logoSmall'} />
            </div>

            {/*--Personal Best--*/}
            <div className="flex items-center gap-3.5">
                <GameHistory />
                <div className={'flex items-center gap-2.5'}>
                    <img src={TrophyIcon} alt={'TrophyIcon'} />
                    <h4
                        className={
                            'text-preset-four text-neutral-400 capitalize'
                        }>
                        <span className={'not-md:hidden'}>Personal </span>best:{' '}
                        <span
                            className={
                                'text-neutral-0'
                            }>{`${highestWPM} WPM`}</span>
                    </h4>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
