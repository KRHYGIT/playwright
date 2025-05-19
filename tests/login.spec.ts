import {test, expect, Locator} from '@playwright/test';

let usernameInput : Locator;
let passwordInput : Locator;



test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/login');
    usernameInput= page.locator('input[name="name"]');
    await expect(usernameInput).toBeVisible();
    passwordInput = page.locator('input[name="password"]');
    await expect(passwordInput).toBeVisible();
    const loginButton = page.locator('button[type="submit"]');
    await expect(loginButton).toBeVisible();
});

test('Check out if login page is working', async ({page}) => {
    //await page.goto('http://localhost:4200/login');
    
});

test('check if error message is displayed for blank username', async ({page}) => {
    // page.goto('http://localhost:4200/login');
    //const usernameInput = page.locator('input[name="name"]');
    await usernameInput.fill('');
    //const passwordInput = page.locator('input[name="password"]');
    await passwordInput.fill('123456');
    const loginButton = page.locator('button[type="submit"]');
    await loginButton.click();
    const errorMessage = page.locator('text=Username is required');
    await expect(errorMessage).toBeVisible();
    
});