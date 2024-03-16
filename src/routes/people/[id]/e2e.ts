import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	await page.goto('/list');
	await page.getByRole('link', { name: 'Luke Skywalker' }).click();
	await expect(page).toHaveURL('/people/cGVvcGxlOjE=');
});
