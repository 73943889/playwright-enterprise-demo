import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

const environment = process.env.ENV || 'dev';
dotenv.config({ path: path.resolve(__dirname, `.env.${environment}`) });

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 4 : undefined,

    reporter:[
        ['html', {open: 'never' }],
        ['list']
    ],

    use:{
        baseURL: process.env.BASE_URL,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'on-first-retry',
        headless: true,
    },

    projects: [
        {
            name: 'Chromium',
            use: { ...devices['Desktop Chrome']},
        },
        {
            name: 'Firefox',
            use: { ...devices['Desktop Firefox']},
        }
    ],
});