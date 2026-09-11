import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');
  await page.getByRole('link', { name: 'Modal & Overlays' }).click();
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Datepicker' }).click();
  await page.getByText('Datepicker With Range').click();
  await page.getByRole('textbox', { name: 'Range Picker' }).click();
  await page.getByText('1').nth(1).click();
  await page.getByText('3').nth(2).click();
});