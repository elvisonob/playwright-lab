import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});

test('Locator Syntax Rules', async ({ page }) => {
  // find by Tag
  page.locator('input');

  // find by Id
  page.locator('#inputEmail');

  // find by class value
  page.locator('.shape-rectangle');

  // find by any attribute
  page.locator('[placeholder="Email"]');

  //find by full class value
  page.locator(
    '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]',
  );

  //find by several selectors
  page.locator('input[placeholder="Email"] [nbinput]');

  //find by Xpath (NOT RECOMMENDED)
  page.locator('//*[@id="inputEmail"]');

  //find by partial text match
  page.locator(':text("Using")');

  //find by exact text match
  page.locator(':text-is("Using the Grid")');
});

test('User-visible locators', async ({ page }) => {
  await page.getByRole('button', { name: 'Sign in' }).first().click();
  await page
    .getByRole('textbox', { name: 'Email' })
    .first()
    .fill('test@test.com');

  await page.getByLabel('Email').first().fill('elvis@elvis.com');

  await page.getByPlaceholder('Jane Doe').fill('Elvis');

  await page.getByText('Submit').first().click();

  await page.getByTestId('inputEmail1').fill('Nfana Ibaga o');

  await page.getByTitle('IoT Dashboard').click();
});

test('Locating child elements', async ({ page }) => {
  await page
    .locator('nb-card')
    .locator('nb-radio-group')
    .locator(':text-is("Option 1")')
    .click();

  await page.locator('nb-card nb-radio-group :text-is("Option 1")').click();

  await page
    .locator('nb-card')
    .getByRole('button', { name: 'Sign in' })
    .first()
    .click();

  await page.locator('nb-card').nth(3).getByRole('button').click();
});
