import onlineIcon from './assets/images/icon-online.svg'
import onBoardingIcon from './assets/images/icon-onboarding.svg'
import budgetingIcon from './assets/images/icon-budgeting.svg'
import apiIcon from './assets/images/icon-api.svg'

import plane from './assets/images/image-plane.jpg'
import currency from './assets/images/image-currency.jpg'
import confetti from './assets/images/image-confetti.jpg'
import restaurant from './assets/images/image-restaurant.jpg'

export const whyEasyBanking = {
    easyBanking:{
        title: 'Why choose Easybank?',
        desc: 'We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.'
    },
    offers : [
        {
            id: 'of1',
            title: 'Online Banking',
            icon: onlineIcon,
            desc: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            id: 'of2',
            title: 'Simple Budgeting',
            icon: budgetingIcon,
            desc: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
        },
        {
            id: 'of3',
            title: 'Fast Onboarding',
            icon: onBoardingIcon,
            desc: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
        },
        {
            id: 'of4',
            title: 'Open API',
            icon: apiIcon,
            desc: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. '
        },
    ]
}


export const articles = {
    title: "Latest Articles", 
    articles: [
        {
            id: 'ar1',
            author: 'By Claire Robinson',
            title: 'Receive money in any currency with no fees',
            desc: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
            image: currency,
        },
        {
            id: 'ar2',
            author: 'By Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            desc: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
            image: restaurant,
        },
        {
            id: 'ar3',
            author: 'By Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            desc: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
            image: plane,
        },
        {
            id: 'ar4',
            author: 'By Claire Robinson',
            title: 'Our invite-only Beta accounts are now live! ',
            desc: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
            image: confetti,
        }
    ]
}