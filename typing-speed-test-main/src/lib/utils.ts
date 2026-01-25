import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { text } from '../../data.ts';
import { faker } from '@faker-js/faker';
import { MAX_WORDS } from './constants.ts';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getRandomTextMode(mode: GameDifficulty) {
    return text[mode][Math.floor(Math.random() * text[mode].length)].text;
}

export function generateRandomInt(max: number) {
    return Math.floor(Math.random() * (max - 50) + 50);
}

export function getRandomText(count: number) {
    return faker.word.words(generateRandomInt(count));
}

export function generateGameText(mode: GameMode, difficulty: GameDifficulty) {
    if (mode === 'passage') {
        return getRandomTextMode(difficulty);
    } else {
        return getRandomText(MAX_WORDS);
    }
}

export function formatTimer(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')}`;
}

export function dateFormat(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
    });
}
