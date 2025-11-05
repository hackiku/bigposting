// src/app/home/advertisers/demo/utils/languageFlags.ts
/**
 * Utility functions for mapping languages to country flags
 */

export interface LanguageFlagMapping {
	[key: string]: string;
}

/**
 * Maps language names to their corresponding country codes for flag display
 */
export const languageToCountryCode: LanguageFlagMapping = {
	'English': 'us',
	'Arabic': 'sa',
	'Bulgarian': 'bg',
	'Chinese': 'cn',
	'Dutch': 'nl',
	'French': 'fr',
	'German': 'de',
	'Greek': 'gr',
	'Hindi': 'in',
	'Indonesian': 'id',
	'Italian': 'it',
	'Japanese': 'jp',
	'Korean': 'kr',
	'Norwegian': 'no',
	'Polish': 'pl',
	'Portuguese': 'pt',
	'Russian': 'ru',
	'Spanish': 'es',
	'Swedish': 'se',
	'Turkish': 'tr',
	'Ukrainian': 'ua',
	'Vietnamese': 'vn',
	'Thai': 'th',
	'Finnish': 'fi',
	'Danish': 'dk',
	'Czech': 'cz',
	'Hungarian': 'hu',
	'Romanian': 'ro',
	'Slovak': 'sk',
	'Slovenian': 'si',
	'Croatian': 'hr',
	'Serbian': 'rs',
	'Estonian': 'ee',
	'Latvian': 'lv',
	'Lithuanian': 'lt',
	'Maltese': 'mt',
	'Macedonian': 'mk',
	'Albanian': 'al',
	'Bosnian': 'ba',
	'Montenegrin': 'me',
	'Icelandic': 'is',
	'Irish': 'ie',
	'Welsh': 'gb-wls',
	'Scottish': 'gb-sct',
	'Catalan': 'es-ct',
	'Basque': 'es-pv',
	'Galician': 'es-ga',
	'Luxembourgish': 'lu',
	'Belgian': 'be',
	'Swiss German': 'ch',
	'Austrian German': 'at',
	'Canadian English': 'ca',
	'Australian English': 'au',
	'British English': 'gb',
	'American English': 'us',
	'Mexican Spanish': 'mx',
	'Argentinian Spanish': 'ar',
	'Colombian Spanish': 'co',
	'Chilean Spanish': 'cl',
	'Peruvian Spanish': 'pe',
	'Venezuelan Spanish': 've',
	'Brazilian Portuguese': 'br',
	'European Portuguese': 'pt',
	'Canadian French': 'ca',
	'Belgian French': 'be',
	'Swiss French': 'ch',
	'Moroccan Arabic': 'ma',
	'Egyptian Arabic': 'eg',
	'Lebanese Arabic': 'lb',
	'Jordanian Arabic': 'jo',
	'Iraqi Arabic': 'iq',
	'Syrian Arabic': 'sy',
	'Algerian Arabic': 'dz',
	'Tunisian Arabic': 'tn',
	'Libyan Arabic': 'ly',
	'Sudanese Arabic': 'sd',
	'Yemeni Arabic': 'ye',
	'Omani Arabic': 'om',
	'Emirati Arabic': 'ae',
	'Qatari Arabic': 'qa',
	'Kuwaiti Arabic': 'kw',
	'Bahraini Arabic': 'bh'
};

/**
 * Gets the country code for a given language
 * @param language - The language name
 * @returns The country code for the flag, defaults to 'us' if not found
 */
export const getCountryCodeForLanguage = (language: string): string => {
	return languageToCountryCode[language] || 'us';
};

/**
 * Gets the flag URL for a given language
 * @param language - The language name
 * @param size - The flag size (w20, w40, w80, etc.)
 * @returns The complete flag URL
 */
export const getFlagUrlForLanguage = (language: string, size: string = 'w20'): string => {
	const countryCode = getCountryCodeForLanguage(language);
	return `https://flagcdn.com/${size}/${countryCode}.png`;
};

/**
 * React component props for language flag display
 */
export interface LanguageFlagProps {
	language: string;
	size?: 'w20' | 'w40' | 'w80';
	className?: string;
	showLabel?: boolean;
}