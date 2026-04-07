import { test, expect } from '@playwright/test';

test.describe('Writing list', () => {
  test('renders the writing index', async ({ page }) => {
    await page.goto('/writing');
    await expect(page.getByRole('heading', { name: 'writing/' })).toBeVisible();
  });

  test('lists published posts', async ({ page }) => {
    await page.goto('/writing');
    await expect(page.locator('.post-row').first()).toBeVisible();
  });
});

test.describe('Writing post', () => {
  test('renders an individual post', async ({ page }) => {
    await page.goto('/writing/go-project-setup');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Setting up a Go project');
  });

  test('post page has author card', async ({ page }) => {
    await page.goto('/writing/go-project-setup');
    await expect(page.locator('.author-card')).toBeVisible();
  });
});
