const colors = require("tailwindcss/colors")
module.exports = {
    light: {
        colorScheme: 'light',
        primaryColor: 'oklch(20.05% 0.018 222.71)',
        secondaryColor: 'oklch(65.93% 0.169 21.22)',
        accentColor: 'oklch(66.59% 0.214 318.55)',

        infoColor: '#27A7E6',
        warningColor: '#F0B22D',
        successColor: '#39BC52',
        errorColor: '#EF4C50',

        baseColor100: '#FFFFFF',
        baseColor200: '#F0F5F9', // Will use default
        baseColor300: '#CADAEA',

        backgroundColor: '#F6F6F6',
        foregroundColor: '#0D181C',

        colorText: '#0D181C',
        colorTextInverse: '#FFFFFF',
        borderRadius: '10px',
        borderColor: '#0D181C',
    },
    dark: {
        colorScheme: 'dark',
        primaryColor: '#ED6FB4',
        secondaryColor: '#4662ff',
        accentColor: '#C95EE6',

        infoColor: '#27A7E6',
        warningColor: '#F0B22D',
        successColor: '#39BC52',
        errorColor: '#EF4C50',

        baseColor100: '#182327',
        baseColor200: '#232E32', // Will use default
        baseColor300: '#374246',

        backgroundColor: '#0D181C',
        foregroundColor: '#F6F6F6',

        colorText: '#FFFFFF',
        colorTextInverse: '#0D181C',
        borderRadius: '10px',
        borderColor: '#374246',
    },
    marble: {
        colorScheme: 'light',
        primaryColor: '#294C84',
        secondaryColor: '#ED6FB4',
        infoColor: '#27A7E6',
        warningColor: '#EDC56F',
        successColor: '#55BD69',
        errorColor: '#E75F63',
        borderRadius: '10px',
        baseColor100: '#FFFFFF',
        baseColor200: '#E0E8ED',
        baseColor300: '#CDD5DB',
        colorLight: '#FFFFFF',
        colorDark: '#171C30',
        borderColor: '#CDD5DB',
        btnBorderRadius: '999px',
    }
    // Add more themes as needed
};

