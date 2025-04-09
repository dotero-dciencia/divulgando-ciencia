import * as enTranslations from "./translations/en.json"

export const languages = ['es', 'en'] as const;
export const LANGUAGES = {
        en: "English",
        es: "Español",
    } as const

export type LanguageCode = keyof typeof LANGUAGES

export const DEFAULT_LANGUAGE = "es"

type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
        ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`
}[keyof ObjectType & (string | number)]
export type TranslationKey = NestedKeyOf<typeof enTranslations>

