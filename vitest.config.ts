/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        dir: './src',
        /* for example, use global to avoid globals imports (describe, test, expect): */
        globals: true,
        coverage: {
            exclude: ['**/*.spec.ts', '**/*.test.ts', '**/test/*.*'],
        },
    },
});
