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
        '--color-primary': '#0D181C',
        '--color-secondary': '#E75F63',
        '--color-accent': '#C95EE6',
        '--color-info': '#27A7E6',
        '--color-warning': '#F0B22D',
        '--color-success': '#39BC52',
        '--color-error': '#EF4C50',

        '--color-background': '#F6F6F6',
        '--color-foreground': '#0D181C',

        '--color-base-100': '#FFFFFF',
        '--color-base-200': '#F0F5F9',
        '--color-base-300': '#CADAEA',

        '--color-text': '#0D181C',
        '--color-text-inverse': '#FFFFFF',

        '--border-radius': '0.375rem',
        '--btn-border-radius': '10px',
        '--border-width': '1px',
    },

    '[data-theme]': {
        'background-color': 'var(--color-background, #ffffff)',
        'color': 'var(--color-text, #000000)',
    },

};

// Updated function to generate theme styles based on user-specified themes
const generateThemeStyles = (config) => {
    const userThemes = getUserThemes(config); // Get the filtered user themes

    return userThemes.reduce((acc, themeName) => {
        const theme = themes[themeName];
        if (!theme) return acc;

        acc[`[data-theme="${themeName}"]`] = {
            '--color-primary': theme.primaryColor || rootStyles[':root']['--color-primary'],
            '--color-secondary': theme.secondaryColor || rootStyles[':root']['--color-secondary'],
            '--color-accent': theme.accentColor || rootStyles[':root']['--color-accent'],
            '--color-info': theme.infoColor || rootStyles[':root']['--color-info'],
            '--color-warning': theme.warningColor || rootStyles[':root']['--color-warning'],
            '--color-success': theme.successColor || rootStyles[':root']['--color-success'],
            '--color-error': theme.errorColor || rootStyles[':root']['--color-error'],

            '--color-base-100': theme.baseColor100 || rootStyles[':root']['--color-base-100'],
            '--color-base-200': theme.baseColor200 || rootStyles[':root']['--color-base-200'],
            '--color-base-300': theme.baseColor300 || rootStyles[':root']['--color-base-300'],

            '--color-background': theme.backgroundColor || rootStyles[':root']['--color-background'],
            '--color-foreground': theme.foregroundColor || rootStyles[':root']['--color-foreground'],

            '--color-text': theme.colorText || rootStyles[':root']['--color-text'],
            '--color-text-inverse': theme.colorTextInverse || rootStyles[':root']['--color-text-inverse'],

            '--border-radius': theme.borderRadius || rootStyles[':root']['--border-radius'],
            '--btn-border-radius': theme.btnBorderRadius || rootStyles[':root']['--btn-border-radius'],
            '--border-width': theme.borderWidth || rootStyles[':root']['--border-width'],
            '--color-border': theme.borderColor || rootStyles[':root']['--color-border'],
        };
        return acc;
    }, {});
};

module.exports = { rootStyles, generateThemeStyles };
