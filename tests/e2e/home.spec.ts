import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero with name', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Juan Lopez');
  });

  test('has skip to content link', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Skip to content' })).toBeAttached();
  });

  test('hero social links are present', async ({ page }) => {
    const hero = page.locator('.hero-links');
    await expect(hero.getByRole('link', { name: /GitHub/ })).toHaveAttribute('href', 'https://github.com/juanpalopez');
    await expect(hero.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute('href', 'https://linkedin.com/in/juanlopezguzman');
    await expect(hero.getByRole('link', { name: /Email/ })).toHaveAttribute('href', 'mailto:juanpablolopez@outlook.com');
  });

  test('renders projects section with entries', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'projects/' })).toBeVisible();
    await expect(page.locator('.project-card')).toHaveCount(2);
  });

  test('renders writing section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'writing/' })).toBeVisible();
  });

  test('projects section links to /projects', async ({ page }) => {
    await expect(page.locator('a.section-link[href="/projects"]')).toBeVisible();
  });

  test('writing section links to /writing', async ({ page }) => {
    await expect(page.locator('a.section-link[href="/writing"]')).toBeVisible();
  });
});
