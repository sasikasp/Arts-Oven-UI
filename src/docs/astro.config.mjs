import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Documentation',
        social: {
            github: 'https://github.com/withastro/starlight',
        },
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
                label: 'Components',
                autogenerate: { directory: 'component' },
            },
        ],
        }), markdoc(), tailwind()],
});