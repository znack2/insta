const MAIN_TITLE_OPTIONS = {
    1: 'Рекомендации куда сходить анализируя профиль инстаграма',
    2: 'Получи подсказку о лучших локациях для селфи на основании профиля инстаграм',
    3: 'Порекомендуем куда сходить проанализировав ваш профиль в инстаграм',
    4: 'Подберем интересные места на основании профиля инстаграм',
    5: 'Автоматический подбор путешествий на основании профиля инстаграм',
    6: 'Создай для себя лучшее путешествие проанализировав ваш профиль в инстаграм',
    7: 'Получи подсказки в путешествии на основании профиля инстаграм',
}

const RECOMMEND_RESULT_MESSAGE_OPTIONS = {
    1: {
        text: 'следующая рекомендация',
        button: true,
        action: 'refresh'
    },
    2: {
        text: 'следующая рекомендация будет доступна через 10 минут'
    },
    3: {
        text: 'следующая рекомендация будет доступна в ',
        action: 'show_later'
    },
    4: {
        text: 'напишите нам если рекомендация вам не подошла и мы предложим вам более подходящую'
    }
}


const POLL_FORM_OPTIONS = {
    1: {
        title: 'Выберите, где вы сейчас находитесь, и система лучше подберет рекомендацию',
        options: [
           '#nyc 42,184,347 - New York City', '#la 32,034,926 - Los Angeles', '#Miami 24,881,300 - Miami',
            '#Vegas - 18,414,693 - Las Vegas', '#Chicago 18,213,055 - Chicago', '#Sanfrancisco 9,033,074 - San Francisco',
            '#Chicago 18,213,055 - Chicago', '#atl - 7,731,975 - Atlanta', '#Seattle 7,504,111 - Seattle', '#Sandiego 7,176,661 - San Diego',
            '#boston 7,119,386 - Boston'
        ],
        type: 'checkbox'
    },
    2: {
        title: 'Выберите с чем вы хотите сравнить нашу рекомендацию или каким сервисом вы обычно пользуетесь и доверяете',
        options: [
            'TripAdvaiser', 'Yell', 'Travelocity', 'GoogleMap'
        ],
        type: 'checkbox'
    },
    3: {
        title: 'Выберите по каким данным вы хотите анализировать профиль',
        options: [
            "посты",
            "комментарии",
            "друзья",
            "сториес"
        ],
        type: 'checkbox'
    },
    4: {
        title: 'Выберите как часто вы используете инстаграм ',
        options: [
            "Новичок",
            "Для себя",
            "Инфлюенсер",
            "Блогер"
        ],
        type: 'select'
    },
    5: {
        title: 'Выберите какого типа рекомендацию вы хотите',
        options: [
            "для селфи",
            "куда сходить",
            "что посмотреть",
            "где поесть",
            "сюрприз"
        ],
        type: 'checkbox'
    },
    6: {
        title: 'Выберите готовы ли вы подождать и получить более уникальную рекомендацию или получить прямо сейчас',
        type: 'text'
    }
}

const PAYMENT_BUTTONS = {
    1: {
        title: 'купить приложение в appStore',
        visibility: 'always'
    },
    2: {
        title: 'оплатить анализ профиля',
        visibility: 'formLoaded'
    },
    3: {
        title: 'оплатить следующие рекомендации',
        visibility: 'accepted',
    },
    4: {
        text: 'Мы проанализировали Ваш профиль и подобрали 2 уникальные рекомендации',
        title: 'перейти чтобы оплатить',
        visibility: 'formLoaded',
    },
    5: {
        title: 'подписка на пакет 5 рекомендаций в день',
        visibility: 'formLoaded',
    },
    6: {
        title: 'подписка на пакет 5 рекомендаций в неделю',
        visibility: 'formLoaded',
    },
    7: {
        title: 'подписка на пакет 5 рекомендаций в месяц',
        visibility: 'formLoaded',
    }
}

const RECOMMENDATION_DEFAULT = {
    imageUrl: 'https://picsum.photos/1300/500',
    title: 'Burger Heroes',
    location: 'Москва | Россия',
    address: 'Большой Сухаревский пер., 25, стр. 1',
    phone: '+7 (111) 111-11-11',
    webSite: 'website.ru',
    lat: 0,
    lng: 0,
    zoom: 2,
}

export { MAIN_TITLE_OPTIONS, RECOMMEND_RESULT_MESSAGE_OPTIONS, POLL_FORM_OPTIONS, PAYMENT_BUTTONS,
    RECOMMENDATION_DEFAULT }