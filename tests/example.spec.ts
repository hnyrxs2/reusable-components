import { test, expect } from '@playwright/test';

test('sample portfolio test', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/hnyrxs2.github.io/);
});
