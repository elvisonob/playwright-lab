import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/');
});

test.describe('Form Layouts page', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
  });

  test('Input fields', async ({ page }) => {
    const usingTheGridEmailInput = page
      .locator('nb-card', { hasText: 'Using the Grid' })
      .getByRole('textbox', { name: 'Email' });
    await usingTheGridEmailInput.fill('test@test.com');
    //await usingTheGridEmailInput.clear();
  });
});

test('radio buttons', async ({ page }) => {
  const usingTheGridForm = page.locator('nb-card', {
    hasText: 'Using the Grid',
  });

  await usingTheGridForm.getByLabel('Option 1').check();
});

test('checkboxes', async ({ page }) => {
  await page.getByText('Modal & Overlays').click();
  await page.getByText('Toastr').click();

  await page
    .getByRole('checkbox', { name: 'Hide on click' })
    .check({ force: true });

  const allBoxes = page.getByRole('checkbox');
  for (const box of await allBoxes.all()) {
    await box.check({ force: true });
    await expect(box).toBeChecked();
  }
});

test('Lists and dropdowns', async ({ page }) => {
  await page.getByText('Modal & Overlays').click();
  await page.getByText('Toastr').click();
});
