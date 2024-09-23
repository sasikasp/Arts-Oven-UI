// postcss.config.js
module.exports = {
    plugins: [
        require("tailwindcss")("./src/components/tailwind.config.js"),
        require('autoprefixer'),
        require('cssnano'),
    ],
};
