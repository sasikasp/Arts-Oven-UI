---
title: Configuration
description: Configuration Guide for Arts Oven UI Component Library
---

The **Arts Oven UI Component Library** offers a range of configuration options to help you tailor the library to your
project's needs. Below are the available configurations you can set in your `tailwind.config.js` file.

## Arts Oven UI Configuration Options

### Logs:

`logs: true | false `

- When set to true, this option enables logging for debugging purposes. It can be helpful during development to track
  component usage and identify issues. Set it to false in production to reduce console output.

### Themes:

`theme: ['light', 'dark', 'eco']`

- This option allows you to specify the available themes for your application. The Arts Oven UI Component Library comes
  with a set of pre-built themes that you can easily integrate into your project. You can define multiple themes.
- To use these themes in your project, simply call them through this configuration option. You can switch between these
  themes dynamically based on user preferences or system settings.

### Shadows

`shadow: true | false`

- When enabled (true), this option allows components to utilize shadow effects, enhancing depth and visual hierarchy.
  Disabling it (false) will remove shadow styles from all components, resulting in a flatter design.

### Gradients

`gradients: true | false`

- This option enables (`true`) or disables (`false`) gradients for components. When enabled, you can apply
  beautiful gradients to buttons, cards, and other UI elements, adding a modern touch to your design.

### Example Configuration

Here’s an example of how you might set up your `tailwind.config.js` with the Arts Oven UI configurations.

**Example:**
````javascript {11-16}
module.exports = {
    content: [
        "./src/**/*.{html,js}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('artsovenui'),
    ],
    artsovenui: {
        logs: true,
        theme: ['light', 'dark', 'eco'], // Call pre-built themes here
        shadow: true,
        gradients: true,
    },
};
````

### Conclusion

These configuration options provide flexibility and control over how the Arts Oven UI Component Library behaves in your
application. Feel free to adjust these settings according to your project's requirements and design preferences! For
further customization and advanced features, refer to our comprehensive documentation.