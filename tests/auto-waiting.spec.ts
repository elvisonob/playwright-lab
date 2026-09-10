import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/');
  await page.getByText('Modal & Overlays').click();
  await page.getByText('Dialog').click();
});

test('Auto waiting', async ({ page }) => {
  const dialogWithDelayForm = page.locator('nb-card', {
    hasText: 'Open Dialog With Delay',
  });
  await dialogWithDelayForm.getByRole('button', { name: '3 seconds' }).click();

  const dialogContainer = page.locator('nb-dialog-container');
  //await dialogContainer.getByRole('button', { name: 'Ok' }).click();

  const dialogHeaderText = await dialogContainer
    .locator('nb-card-header')
    .textContent();
  expect(dialogHeaderText).toEqual('Friendly reminder');
});

test('Auto waiting', async ({ page }) => {
  const dialogWithDelayForm = page.locator('nb-card', {
    hasText: 'Open Dialog With Delay',
  });
  await dialogWithDelayForm.getByRole('button', { name: '3 seconds' }).click();

  const dialogContainer = page.locator('nb-dialog-container');
  //await dialogContainer.getByRole('button', { name: 'Ok' }).click();

  const dialogHeaderText = await dialogContainer
    .locator('nb-card-header')
    .textContent();
  expect(dialogHeaderText).toEqual('Friendly reminder');
});
