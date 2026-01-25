import { DIFFICULTIES, MODES, TIME_MODE } from '@/lib/constants.ts';
import Divider from '@/components/UI/divider.tsx';
import SettingMenu from '@/components/UI/setting-menu.tsx';
import Stat from '@/components/UI/stat.tsx';
import { useTypingStore } from '@/store/store.ts';
import { memo } from 'react';

interface StatsMenuProps {
    wpm: number;
    accuracy: number;
    timer: number;
}

function StatsMenu({ wpm, accuracy, timer }: StatsMenuProps) {
    const { settings, updateSettings } = useTypingStore();

    return (
        <div
            className={
                'relative z-30 flex not-lg:flex-col not-md:gap-4 not-lg:gap-5 lg:items-center lg:justify-between border-b pb-4 border-neutral-700'
            }>
            {/*--Stats--*/}
            <div className={'flex not-md:justify-evenly items-center'}>
                <Stat type="wpm" value={wpm} />
                <Divider />
                <Stat type="accuracy" value={accuracy} />
                <Divider />
                <Stat type="timer" value={timer} />
            </div>

            {/*--Settings Menu--*/}
            <div
                className={
                    'flex items-center not-md:gap-2.5 not-md:*:basis-1/2'
                }>
                <SettingMenu
                    title={'mode'}
                    value={settings.mode}
                    options={MODES}
                    onChange={(val) => updateSettings({ mode: val })}
                />

                {settings.mode === 'passage' ? (
                    <>
                        <Divider className={'not-md:hidden'} />
                        <SettingMenu
                            title={'difficulty'}
                            value={settings.difficulty}
                            options={DIFFICULTIES}
                            onChange={(val) =>
                                updateSettings({ difficulty: val })
                            }
                        />
                    </>
                ) : (
                    <>
                        <Divider className={'not-md:hidden'} />
                        <SettingMenu
                            title={'time'}
                            value={String(settings.timeLimit)}
                            options={TIME_MODE}
                            onChange={(val) =>
                                updateSettings({ timeLimit: Number(val) })
                            }
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default memo(StatsMenu);
