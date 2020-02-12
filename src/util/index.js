import { MAIN_TITLE_OPTIONS } from './uiOptions'

const extractMainTitle = (option) => {
    return MAIN_TITLE_OPTIONS[option] || MAIN_TITLE_OPTIONS[1]
}

export {
    extractMainTitle
}