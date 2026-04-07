import { test, expect } from '@playwright/test';

test.describe('Projects page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('renders projects heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'projects/' })).toBeVisible();
  });

  test('lists project entries', async ({ page }) => {
    await expect(page.locator('.project-card').first()).toBeVisible();
  });

  test('project cards have github links', async ({ page }) => {
    const githubLinks = page.getByRole('link', { name: /github/ });
    await expect(githubLinks.first()).toHaveAttribute('href', /github\.com/);
  });

  test('coingecko-cli project is listed', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'coingecko-cli' })).toBeVisible();
  });

  test('job-scheduler-cpp project is listed', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'job-scheduler-cpp' })).toBeVisible();
  });
});
