const colors = require("tailwindcss/colors")
module.exports = {
    light: {
        colorScheme: 'light',
        primaryColor: '#ee2281',
        secondaryColor: colors.gray[600],
        infoColor: colors.sky[600],
        warningColor: colors.yellow[600],
        successColor: colors.green[600],
        errorColor: colors.red[600],
        borderRadius: '0',
        baseColor100: colors.white, // Will use bg,
        baseColor200: colors.slate[100], // Will use default
        baseColor300: colors.slate[200],
        colorLight: colors.white,
        colorDark: colors.slate[800],
    },
    dark: {
        colorScheme: 'dark',
        primaryColor: colors.blue[600],
        secondaryColor: colors.gray[600],
        infoColor: colors.sky[600],
        warningColor: colors.yellow[600],
        successColor: colors.green[600],
        errorColor: colors.red[600],
        borderRadius: '0.375rem',
        baseColor100: colors.slate[950],
        baseColor200: colors.slate[900],
        baseColor300: colors.slate[800],
        colorLight: colors.white,
        colorDark: colors.slate[800],
    },
    rose: {
        colorScheme: 'light',
        primaryColor: colors.rose[600],
        secondaryColor: colors.slate[600],
        infoColor: colors.indigo[600],
        warningColor: colors.amber[600],
        successColor: colors.emerald[600],
        errorColor: colors.orange[600],
        borderRadius: '9999px',
        baseColor100: colors.rose[50],
        baseColor200: colors.rose[100],
        baseColor300: colors.rose[200],
        colorLight: colors.white,
        colorDark: colors.rose[800],
    }
    // Add more themes as needed
};

