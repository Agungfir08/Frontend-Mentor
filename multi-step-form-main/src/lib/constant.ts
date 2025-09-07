import ArcadeIcon from '../assets/icon-arcade.svg'
import AdvancedIcon from '../assets/icon-advanced.svg'
import ProIcon from '../assets/icon-pro.svg'

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