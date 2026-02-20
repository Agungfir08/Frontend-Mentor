import SettingDialog from './components/setting-dialog';
import TabMenu from './components/tab-menu';
import Timer from './components/timer';

function App() {
    return (
        <main className="flex flex-col items-center h-full gap-12 md:gap-27 lg:gap-12">
            <div className="space-y-10 md:space-y-12 text-center">
                <h1 className="text-blue-100 text-2xl md:text-[32px] font-bold">
                    podomoro
                </h1>
                <TabMenu />
            </div>
            <div className="flex-1 flex flex-col items-center justify-between">
                <Timer />
                <SettingDialog />
            </div>
        </main>
    );
}

export default App;
