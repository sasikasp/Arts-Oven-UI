import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Arts Oven UI',
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        components: {
            ThemeSelect: '../docs/src/components/ThemeSelect.astro'
        },
        customCss: ['./src/style/custom.css'],
        sidebar: [
            {
                label: 'Getting Start',
                items: [
                    { label: 'Introduction', slug: 'guides/introduction' },
                    { label: 'Quick Start', slug: 'guides/quick-start' },
                    { label: 'Configuration', slug: 'guides/configure' },
                    { label: 'Download', slug: 'guides/download' },
                    { label: 'Contribute', slug: 'guides/contribute' },
                ],
            },
            {
                label: 'Elements',
                autogenerate: { directory: 'elements' },
            },
            {
                label: 'Components',
                autogenerate: { directory: 'component' },
            },
        ],
        }), markdoc(), tailwind()],
});