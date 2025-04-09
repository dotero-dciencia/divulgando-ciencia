import * as enTranslations from "./translations/en.json"
import * as esTranslations from "./translations/es.json"
import { DEFAULT_LANGUAGE } from "./config"

// Create typed translations object
const translations = {
    en: enTranslations,
    es: esTranslations,
}

export function t(key: string, lang: string): string {
    const currentLang = lang
    const keys = key.split(".")

    // Get the translation object for the current language, fallback to default
    const translationObj = translations[currentLang] || translations[DEFAULT_LANGUAGE]

    // Navigate through the nested keys
    let result = translationObj
    for (const k of keys) {
        if (result && typeof result === "object" && k in result) {
            result = result[k]
        } else {
            // If key not found in current language, try default language
            if (currentLang !== DEFAULT_LANGUAGE) {
                let defaultResult = translations[DEFAULT_LANGUAGE]
                for (const defaultK of keys) {
                    if (defaultResult && typeof defaultResult === "object" && defaultK in defaultResult) {
                        defaultResult = defaultResult[defaultK]
                    } else {
                        return key // Return the key itself if not found in default language
                    }
                }
                return typeof defaultResult === "string" ? defaultResult : key
            }
            return key // Return the key itself if not found
        }
    }

    return typeof result === "string" ? result : key
}
