const MAIN_TITLE_OPTIONS = {
    1: 'Your next Californian beach trip',
    2: 'We have a party Special for you',
    3: 'Check it out if you a Star',
    4: 'Explore  Family-friendly  Parks',
    5: "Don't waste your vacation days",
    6: 'Explore Luxurious Mansions',
}

const RECOMMEND_RESULT_MESSAGE_OPTIONS = {
    1: {
        text: 'Next tip',
        // text: 'следующая рекомендация',
        button: true,
        action: 'refresh'
    },
    2: {
        text: 'Next tip will be available in 5 min'
        // text: 'следующая рекомендация будет доступна через 10 минут'
    },
    3: {
        text: 'Give us a few minutes and there will be a new recommendation for you',
        // text: 'следующая рекомендация будет доступна в ',
        action: 'show_later'
    },
    4: {
        text: 'Lets us know if this not good for you and we can send you a better one'
        // text: 'напишите нам если рекомендация вам не подошла и мы предложим вам более подходящую'
    }
}


const POLL_FORM_OPTIONS = {
    1: {
        title: 'Please send you location and we can send you recommendaton from there ?',
        // title: 'Выберите, где вы сейчас находитесь, и система лучше подберет рекомендацию',
        options: [
           'New York City', 'Los Angeles', 'Miami',
            'Las Vegas', 'Chicago', 'San Francisco',
            'Chicago', 'Atlanta', 'Seattle', 'San Diego',
            'Boston'
        ],
        type: 'select'
    },
    2: {
        title: 'Which travel service do you usually use, we can provide better service than that ?',
        // title: 'Выберите с чем вы хотите сравнить нашу рекомендацию или каким сервисом вы обычно пользуетесь и доверяете',
        options: [
            'TripAdvaiser', 'Yell', 'Travelocity', 'GoogleMap'
        ],
        type: 'checkbox'
    },
    3: {
        title: 'What is the best data for us to choose in order to make the best recommendation for you',
        // title: 'Выберите по каким данным вы хотите анализировать профиль',
        options: [
            "Posts",
            "Comments",
            "Friends",
            "Stories"          
            // "посты",
            // "комментарии",
            // "друзья",
            // "сториес"
        ],
        type: 'checkbox'
    },
    4: {
        title: 'Let us know how often do you usually post to instagram ?',
        // title: 'Выберите как часто вы используете инстаграм ',
        options: [
            "Novice",
            "For yourself",
            "Blogger",
            // "Новичок",
            // "Для себя",
            // "Блогер"
        ],
        type: 'select'
    },
    5: {
        title: 'What is your interestering in ?',
        // title: 'Выберите какого типа рекомендацию вы хотите',
        options: [
            "Recommendation for selfies",
            "Recommendation where to go",
            "Recommendation what to see",
            "Recommendation where to eat",
            "Recommendation surprise"         
            // "для селфи",
            // "куда сходить",
            // "что посмотреть",
            // "где поесть",
            // "сюрприз"
        ],
        type: 'checkbox'
    },
    6: {
        title: 'Do you need an immediatly response or can you wait 10 mins ?',
        // title: 'Выберите готовы ли вы подождать и получить более уникальную рекомендацию или получить прямо сейчас',
        type: 'text'
    }
}

const PAYMENT_BUTTONS = {
    1: {
        title: 'Purcase an app in appStore',
        // title: 'купить приложение в appStore',
        visibility: 'always'
    },
    2: {
        title: 'Subscribe now to analysis your profile',
        // title: 'оплатить анализ профиля',
        visibility: 'formLoaded'
    },
    3: {
        title: 'Subscribe now to get more',
        // title: 'Subscribe now to receive next travel recommendation',
        // title: 'Switch to Free Plan',
        // title: 'оплатить следующие рекомендации',
        visibility: 'accepted',
    },
    4: {
        // text: 'Мы проанализировали Ваш профиль и подобрали 2 уникальные рекомендации',
        // title: 'перейти чтобы оплатить',
        // visibility: 'formLoaded',
    },
    5: {
        title: 'Switch to dayly subscription',
        // title: 'подписка на пакет 5 рекомендаций в день',
        visibility: 'formLoaded',
    },
    6: {
        title: 'Switch to weekly subscription',
        visibility: 'formLoaded',
    },
    7: {
        title: 'Switch to monthly subscription',
        // title: 'subscription на пакет 5 рекомендаций в месяц',
        visibility: 'formLoaded',
    },
    8: {
        title: 'Switch to annual subscription',
        // title: 'subscription на пакет 5 рекомендаций в год',
        visibility: 'formLoaded',
    }
}

const RECOMMENDATION_DEFAULT = {
    imageUrl: 'https://a0.muscache.com/im/pictures/fa7e6218-0735-433a-b579-6a159c54d66b.jpg?aki_policy=x_large',
    title: 'Bi-Rite Creamery',
    location: 'ICE CREAM SHOP',
    address: '3692 18th Street San Francisco, CA 94110 Mission District',
    phone: '+1 415-626-5600',
    work: 'Monday ‑ Sunday 12:00 AM ‑ 9:00 PM',
    webSite: 'biritemarket.com',
    lat: 0,
    lng: 0,
    zoom: 2,
}









export { MAIN_TITLE_OPTIONS, RECOMMEND_RESULT_MESSAGE_OPTIONS, POLL_FORM_OPTIONS, PAYMENT_BUTTONS,
    RECOMMENDATION_DEFAULT }