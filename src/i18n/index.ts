// Fix the imports to properly load the translation files
import { DEFAULT_LANGUAGE } from "./config"

// Import translations
// Note: We're importing the JSON files directly which requires TypeScript/Astro to support JSON imports
import * as enTranslations from "./translations/en.json"
import * as esTranslations from "./translations/es.json"

// Create typed translations object
const translations = {
    en: enTranslations,
    es: esTranslations,
}

export const clientTranslations = translations

// Export all i18n functionality from a single file
export * from './config';
export * from './utils';
export * from './ui';