import axios from 'axios';
import { create } from 'zustand';
import {
    createJSONStorage,
    persist,
    subscribeWithSelector,
} from 'zustand/middleware';

type DictionaryStoreState = ThemeStoreState &
    FontStoreState & {
        isLoading: boolean;
        isError: boolean;
        data: DictionaryEntry | null;
        fetchDictionaryEntry: (word: string) => void;
    };

const useDictionaryStore = create<DictionaryStoreState>()(
    subscribeWithSelector(
        persist(
            (set) => ({
                isDarkMode: false,
                fontType: 'sans serif',
                isLoading: false,
                isError: false,
                data: null,
                toggleDarkMode: () =>
                    set((state) => ({ isDarkMode: !state.isDarkMode })),
                onChangeFontType: (font) => set({ fontType: font }),
                fetchDictionaryEntry: async (word) => {
                    const trimmedWord = word.trim();

                    if (trimmedWord === '') {
                        set({
                            data: null,
                            isError: false,
                        });
                        return;
                    }

                    set({ isLoading: true, isError: false });

                    await axios
                        .get(
                            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
                        )
                        .then((res) => {
                            set({
                                data: res.data[0],
                            });
                        })
                        .catch((error) => {
                            set({ isError: true });
                        })
                        .finally(() => set({ isLoading: false }));
                },
            }),
            {
                name: 'dictionary-app',
                storage: createJSONStorage(() => localStorage),
                onRehydrateStorage: () => (state) => {
                    if (state?.isDarkMode)
                        document.documentElement.classList.add('dark');
                    else document.documentElement.classList.remove('dark');

                    document.body.classList.remove(
                        'font-inter',
                        'font-lora',
                        'font-inconsolata',
                    );
                    if (state?.fontType === 'sans serif')
                        document.body.classList.add('font-inter');
                    if (state?.fontType === 'serif')
                        document.body.classList.add('font-lora');
                    if (state?.fontType === 'mono')
                        document.body.classList.add('font-inconsolata');
                },
                partialize: (state) => ({
                    isDarkMode: state.isDarkMode,
                    fontType: state.fontType,
                    wordEntry: state.data,
                }),
            },
        ),
    ),
);

useDictionaryStore.subscribe(
    (state) => state.isDarkMode,
    (isDarkMode) => {
        if (isDarkMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    },
);

useDictionaryStore.subscribe(
    (state) => state.fontType,
    (fontType) => {
        document.body.classList.remove(
            'font-inter',
            'font-lora',
            'font-inconsolata',
        );

        if (fontType === 'sans serif')
            document.body.classList.add('font-inter');
        if (fontType === 'serif') document.body.classList.add('font-lora');
        if (fontType === 'mono')
            document.body.classList.add('font-inconsolata');
    },
);

export default useDictionaryStore;
