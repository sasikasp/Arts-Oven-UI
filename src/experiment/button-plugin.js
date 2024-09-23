const plugin = require('tailwindcss/plugin')

function myFunction({ addBase, addUtilities, addComponents, config, theme }) {
    const buttons = {
        ".btn": {
            padding: ".5rem 1rem",
            borderRadius: theme("borderRadius.md"),
            fontWeight: "600",
            textAlign: "center"
        },
        ".btn-primary": {
            backgroundColor: "#cccccc",
            color: "black",
        }
    }

    addComponents(buttons);
}

module.exports = plugin(myFunction, {
    //...
})