import { test, expect } from '@playwright/test';
import { SITE } from '../../src/config/site';

test.describe('Navigation', () => {
  test('has correct links on home page', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Primary' });
    await expect(nav).toBeVisible();
    await expect(nav.getByRole('link', { name: 'writing' })).toHaveAttribute('href', '/writing');
    await expect(nav.getByRole('link', { name: 'projects' })).toHaveAttribute('href', '/projects');
    await expect(nav.getByRole('link', { name: 'contact' })).toHaveAttribute('href', `mailto:${SITE.email}`);
  });

  test('name link points to home', async ({ page }) => {
    await page.goto('/writing');
    await expect(page.getByRole('link', { name: `${SITE.name} — home` })).toHaveAttribute('href', '/');
  });

  test('writing link is active on /writing', async ({ page }) => {
    await page.goto('/writing');
    await expect(page.getByRole('link', { name: 'writing' })).toHaveClass(/active/);
  });

  test('projects link is active on /projects', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.getByRole('link', { name: 'projects' })).toHaveClass(/active/);
  });

  test('no nav link is active on home page', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Primary' });
    await expect(nav.getByRole('link', { name: 'writing', exact: true })).not.toHaveClass(/active/);
    await expect(nav.getByRole('link', { name: 'projects', exact: true })).not.toHaveClass(/active/);
  });
});
