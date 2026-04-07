import { test, expect } from '@playwright/test';
import { SITE } from '../../src/config/site';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero with name', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText(SITE.name);
  });

  test('has skip to content link', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Skip to content' })).toBeAttached();
  });

  test('hero social links are present', async ({ page }) => {
    const hero = page.locator('.hero-links');
    await expect(hero.getByRole('link', { name: /GitHub/ })).toHaveAttribute('href', SITE.github);
    await expect(hero.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute('href', SITE.linkedin);
    await expect(hero.getByRole('link', { name: /Email/ })).toHaveAttribute('href', `mailto:${SITE.email}`);
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
