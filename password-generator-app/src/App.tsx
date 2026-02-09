import Button from './components/ui/button';
import { ArrowIcon } from './components/icons';
import Slider from './components/ui/slider';
import StrengthIndicator from './components/strength-indicator';
import Checkbox from './components/ui/checkbox';
import { useState } from 'react';
import InputField from './components/ui/input-field';

function App() {
    const [password, setPassword] = useState<string>('');
    const [charLength, setCharLength] = useState<number>(10);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const options = [
        {
            id: 'uppercase',
            label: 'include uppercase letters',
            value: 'uppercase',
        },
        {
            id: 'lowecase',
            label: 'include lowecase letters',
            value: 'lowecase',
        },
        { id: 'number', label: 'include numbers', value: 'number' },
        { id: 'symbol', label: 'include symbols', value: 'symbol' },
    ];

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharLength(Number(e.target.value));
    };

    const handleSelectedOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedOptions((prev) => [...prev, value]);
        } else {
            setSelectedOptions((prev) =>
                prev.filter((option) => option !== value),
            );
        }
    };

    const generatePassword = (len = 25) => {
        if (len === 0) {
            setPassword('');
            alert('Please select a character length greater than 0');
            return;
        }
        if (selectedOptions.length === 0) {
            setPassword('');
            alert('Please select at least one option for password generation');
            return;
        }

        let char = '';
        let pass = '';

        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        if (selectedOptions.includes('uppercase')) {
            char += uppercase;
        }
        if (selectedOptions.includes('lowecase')) {
            char += lowercase;
        }
        if (selectedOptions.includes('number')) {
            char += numbers;
        }
        if (selectedOptions.includes('symbol')) {
            char += symbols;
        }

        for (let i = 0; i < len; i++) {
            const randomIndex = Math.floor(Math.random() * char.length);
            pass += char[randomIndex];
        }

        setPassword(pass);
    };
    return (
        <main className="flex flex-col justify-center items-center min-h-dvh px-4 gap-4">
            <h1 className="text-grey-600 capitalize text-preset-four">
                Password Generator
            </h1>
            <article className="w-full min-w-87.5 max-w-135 max-h-fit space-y-6">
                <InputField value={password} />
                <div className="p-4 md:py-6 md:px-8 bg-grey-800 space-y-8">
                    <Slider value={charLength} onChange={handleSliderChange} />
                    <div className="space-y-4">
                        {options.map((option) => (
                            <Checkbox
                                key={option.id}
                                id={option.id}
                                value={option.value}
                                label={option.label}
                                checked={selectedOptions.includes(option.value)}
                                onChange={handleSelectedOptions}
                            />
                        ))}
                    </div>
                    <StrengthIndicator
                        selectedOptions={selectedOptions.length}
                    />
                    <Button
                        className="group"
                        onClick={() => generatePassword(charLength)}>
                        Generate
                        <ArrowIcon className="fill-grey-800 group-hover:fill-green-200" />
                    </Button>
                </div>
            </article>
        </main>
    );
}

export default App;
