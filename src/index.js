const plugin = require('tailwindcss/plugin');
const picocolors = require('picocolors');
const packageInfo = require("../package.json");

const { generateThemeStyles, rootStyles } = require('./theme/theming');
const plainComponents = require('../dist/plain');
const styledComponents = require('../dist/styled');
const gradientComponents = require('../dist/gradient');
const shadowComponent = require('../dist/shadow');

const colorVariables = require("./utilities/global/color");

function logMessage(label, message) {
    console.log(`╰─ ${picocolors.white(label)}  ${picocolors.dim(message)}`);
}

function myFunction({ addBase, addComponents, config }) {
    const logs = config && config('artsovenui.logs') === true;

    // Artsoven Version
    console.log(`🔥 ${picocolors.yellow("ArtsOven")} ${picocolors.dim(packageInfo.version)}`);

    // Add Plain Components
    addComponents(plainComponents);

    // Add Styled Components
    if (config('artsovenui.styled') !== false) {
        addComponents(styledComponents);
    }

    // Add Gradient Components
    if (config('artsovenui.gradient') === true) {
        addComponents(gradientComponents);
    }

    // Add Gradient Components
    if (config('artsovenui.shadow') === true) {
        addComponents(shadowComponent);
    }

    // Skins
    const themeStyles = generateThemeStyles(config);
    addBase({
        ...rootStyles,
        ...themeStyles,
    });

    // Console Logs
    if (logs) {
        const themesConfig = config('artsovenui.themes');
        const themeMessage = Array.isArray(themesConfig) && themesConfig.length > 0
            ? themesConfig.join(', ')
            : "light & dark";  // Default to "light & dark" if no valid themes are provided

        // Log Theme, Plain, Styled, and Gradient Configurations
        logMessage("Theme", themeMessage);
        logMessage("Plain", "Enabled");

        if (config('artsovenui.styled') !== false) {
            logMessage("Styled Skins", "Enabled");
        }

        if (config('artsovenui.gradient') === true) {
            logMessage("Gradients", "Enabled");
        }
    }
}

module.exports = plugin(myFunction, {
    theme: {
        extend: {
            colors: {
                primary: colorVariables.primary,
                secondary: colorVariables.secondary,
                info: colorVariables.info,
                warning: colorVariables.warning,
                success: colorVariables.success,
                error: colorVariables.error,
                'base-100': colorVariables["base-100"],
                'base-200': colorVariables["base-200"],
                'base-300': colorVariables["base-300"],
            },
        },
    },
});
