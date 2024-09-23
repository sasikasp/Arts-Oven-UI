const themes = require('./theme');

// Function to get user themes from the Tailwind config
const getUserThemes = (config) => {
    let userThemes = ['light', 'dark']; // Default themes

    const themesConfig = config('artsovenui.themes'); // Get themes from config

    if (Array.isArray(themesConfig) && themesConfig.length > 0) {
        userThemes = themesConfig; // If it's an array with values, use that
    } else if (themesConfig === false || themesConfig === true || !themesConfig) {
        userThemes = ['light', 'dark']; // Handle false, true, or undefined cases
    }

    // Filter themes from the themes object, defaulting to an empty array if no match
    return userThemes.filter(themeName => themes[themeName]);
};

const rootStyles = {
    ':root': {
        '--color-primary': '#00ff66',
        '--color-secondary': '#2e363a',
        '--color-info': '#24b5ff',
        '--color-warning': '#ffcf00',
        '--color-success': '#00ff66',
        '--color-error': '#ff2626',

        '--border-radius': '0.375rem',

        '--color-base-100': '#ffffff',
        '--color-base-200': '#f1f5f9',
        '--color-base-300': '#e2e8f0',

        '--color-text': '#000000',
        '--color-default': '#ffffff',
    },

    '[data-theme]': {
        'background-color': 'var(--color-base-100, #ffffff)',
        'color': 'var(--color-text, #000000)',
    },

};

// Updated function to generate theme styles based on user-specified themes
const generateThemeStyles = (config) => {
    const userThemes = getUserThemes(config); // Get the filtered user themes

    return userThemes.reduce((acc, themeName) => {
        const theme = themes[themeName];
        if (!theme) return acc;

        const colorText = theme.colorScheme === "light" ? theme.colorDark : theme.colorLight;
        const colorDefault = theme.colorScheme === "light" ? theme.colorLight : theme.colorDark;

        acc[`[data-theme="${themeName}"]`] = {
            '--color-primary': theme.primaryColor || rootStyles[':root']['--color-primary'],
            '--color-secondary': theme.secondaryColor || rootStyles[':root']['--color-secondary'],
            '--color-info': theme.infoColor || rootStyles[':root']['--color-info'],
            '--color-warning': theme.warningColor || rootStyles[':root']['--color-warning'],
            '--color-success': theme.successColor || rootStyles[':root']['--color-success'],
            '--color-error': theme.errorColor || rootStyles[':root']['--color-error'],

            '--border-radius': theme.borderRadius || rootStyles[':root']['--border-radius'],

            '--color-base-100': theme.baseColor100 || rootStyles[':root']['--color-base-100'],
            '--color-base-200': theme.baseColor200 || rootStyles[':root']['--color-base-200'],
            '--color-base-300': theme.baseColor300 || rootStyles[':root']['--color-base-300'],

            '--color-text': colorText || rootStyles[':root']['--color-text'],
            '--color-default': colorDefault || rootStyles[':root']['--color-text'],
        };
        return acc;
    }, {});
};

module.exports = { rootStyles, generateThemeStyles };
