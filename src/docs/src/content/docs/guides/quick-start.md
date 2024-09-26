---
title: Quick Start
description: Quick Start Guide for Arts Oven UI Component Library
---

Welcome to the Quick Start guide for the Arts Oven UI Component Library! This section will help you get up and running
quickly, providing all the essential steps to install and integrate our library into your projects.

## Installation

### Step 1: Download the Library

You can easily install the Arts Oven UI Component Library using npm. Open your terminal and run the following command:

````sh
npm install artsovenui
````

### Step 2: Configure Tailwind

Once installed, you need to add the Arts Oven UI plugin to your Tailwind CSS configuration. Follow these steps:

1. **Create or Update** `tailwind.config.js`:
   If you don't have a `tailwind.config.js` file, create one by running:
   If you're using a CSS file, add the following line to import the styles:
   ````sh
   npx tailwindcss init
   ````
2. **Add the Plugin**
   Open your `tailwind.config.js` file and include the Arts Oven UI plugin in the plugins array:

   ````js {9}
   module.exports = {
      content: [
         "./src/**/*.{html,js}", // Adjust paths based on your project structure
      ],
      theme: {
         extend: {},
      },
      plugins: [
         require('artsovenui'),
      ],
   };
   ````
## Step 3: Add Tailwind Directives
   Ensure that you have Tailwind's base styles included in your main CSS file. Create or update a CSS file (e.g.,
   `styles.css`) with the following content:

   ````css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ````

## Step 4: Start Using Components
   You can now start using the components in your HTML or JSX files. Here’s a simple example of how to create a button:

   ````xml
   <button class="btn btn-primary">Click Me</button>
   ````

## Additional

### Responsive Design

Our components are designed with responsiveness in mind. Ensure that your layout adjusts seamlessly across different
screen sizes by utilizing utility classes for spacing and alignment.

### Getting Help

If you encounter any issues or have questions, please refer to our FAQ section (insert link here) or reach out to our
community on GitHub Discussions.

### Conclusion

With these steps, you should be ready to start building beautiful interfaces with the Arts Oven UI Component Library.
Explore our full documentation for more detailed examples and advanced features!