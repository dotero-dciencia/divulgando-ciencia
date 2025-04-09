import type { LanguageCode } from './config'

// Define the type for translation dictionaries
export type UiDict = {
    [key: string]: string | UiDict
}

// Define the type for all translations
export type UiDictionaries = {
    [lang in LanguageCode]?: UiDict
}
