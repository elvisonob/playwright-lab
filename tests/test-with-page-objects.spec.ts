import { test } from '../fixture';
import { PageManager } from '../page-objects/page-manager';
import { faker } from '@faker-js/faker';

test('Navigate to form layouts page', async ({ pom }) => {
  await pom.navigateTo.formLayoutsPage();
  await pom.navigateTo.datePickerPage();
  await pom.navigateTo.toasterPage();
  await pom.navigateTo.smartTablePage();
});

test('Parametrized page object methods', async ({ pom }) => {
  const randomFullName = faker.person.fullName();
  const randomEmail = faker.internet.email({ provider: 'test.com' });

  await pom.navigateTo.formLayoutsPage();
  await pom.formLayoutsPage.submitUsingTheGridForm(
    'artem@test.com',
    'Welcome',
    'Option 1',
  );
  //await page.screenshot({ path: 'screenshots/formlayoutsPage.png' });
  await pom.formLayoutsPage.submitInlineForm(randomFullName, randomEmail, true);
  // await pom.navigateTo.datePickerPage();
  // await pom.datepickerPage.selectCommonDatepickerDateFromToday(5);
  // await pom.datepickerPage.selectDatePickerWithRangeFromToday(7, 20);
});
