import { test, expect } from '@playwright/test';

test.describe('ButtonDemo page test', () => {
  test.beforeEach('go to button demopage', async ({ page }) => {
    await page.goto('http://localhost:5174');
  });

  test('Test buttons on demopage', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/hnyrxs2.github.io/);
  });
});
