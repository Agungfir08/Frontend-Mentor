import IconWholeFood from '/images/icon-whole-food-recipes.svg';
import IconMinimumFuss from '/images/icon-minimum-fuss.svg';
import IconSearchInSecond from '/images/icon-search-in-seconds.svg';

export const LIMIT = 6;

export const PREP_TIME_LIST = [
    {
        label: '0 minutes',
        value: 0,
    },
    {
        label: '5 minutes',
        value: 5,
    },
    {
        label: '10 minutes',
        value: 10,
    },
];

export const COOK_TIME_LIST = [
    {
        label: '0 minutes',
        value: 0,
    },
    {
        label: '5 minutes',
        value: 5,
    },
    {
        label: '10 minutes',
        value: 10,
    },
    {
        label: '15 minutes',
        value: 15,
    },
    {
        label: '20 minutes',
        value: 20,
    },
];

export const FEATURES_LIST = [
    {
        title: 'Whole-food recipes',
        description: 'Each dish uses everyday, unprocessed ingredients.',
        src: IconWholeFood,
        alt: 'whole-food icon',
    },
    {
        title: 'Minimum Fuss',
        description:
            'All recipes are designed to make eating healthy quick and easy.',
        src: IconMinimumFuss,
        alt: 'minimum fuss icon',
    },
    {
        title: 'Search in seconds',
        description:
            'Filter by name or ingredient and jump straight to the recipe you need.',
        src: IconSearchInSecond,
        alt: 'search in seconds icon',
    },
];

export const EXIST_REASON = [
    {
        title: 'Cut through the noise.',
        description:
            'The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.',
    },
    {
        title: 'Empower home kitchens.',
        description:
            'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.',
    },
    {
        title: 'Make healthy look good',
        description:
            'High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.',
    },
];

export const PHILOSOPHY = [
    {
        title: 'Whole ingredients first.',
        description:
            'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.',
    },
    {
        title: 'Flavor without compromise.',
        description:
            'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.',
    },
    {
        title: 'Respect for time.',
        description:
            'Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.',
    },
    {
        title: 'Sustainable choices.',
        description:
            'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.',
    },
];
