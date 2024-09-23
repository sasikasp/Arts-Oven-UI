const themes = require("../theme/theme");
const colorVariables = require("../utilities/global/color");

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                ...colorVariables,
            }
        },
    },
    plugins: [
        // Add any other plugins you need
    ],
};

