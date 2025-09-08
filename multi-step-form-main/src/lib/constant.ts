import ArcadeIcon from '../assets/icon-arcade.svg'
import AdvancedIcon from '../assets/icon-advanced.svg'
import ProIcon from '../assets/icon-pro.svg'

export const STEPS = [
    {
        step: 'step 1',
        title: 'your info'
    },
    {
        step: 'step 2',
        title: 'select plan'
    },
    {
        step: 'step 3',
        title: 'add-ons'
    },
    {
        step: 'step 4',
        title: 'summary'
    }
]

export const PLANS = [
    {
        image: ArcadeIcon,
        name: 'Arcade',
        priceMonthly: 9,
        priceYearly: 90,
        checked: true,
    }, {
        image: AdvancedIcon,
        name: 'Advanced',
        priceMonthly: 12,
        priceYearly: 120,
        checked: false,
    }, {
        image: ProIcon,
        name: 'Pro',
        priceMonthly: 15,
        priceYearly: 150,
        checked: false,
    }
]

export const ADDONS = [
    {
        name: 'Online service',
        description: 'Access to multiplayer games',
        priceMonthly: 1,
        priceYearly: 10,
    },
    {
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        priceMonthly: 2,
        priceYearly: 20,
    },
    {
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        priceMonthly: 2,
        priceYearly: 20,
    }
]