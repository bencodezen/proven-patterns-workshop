import { test, expect } from '@playwright/test'

test('home page renders the main heading', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1, name: 'Home Page' })).toBeVisible()
})
