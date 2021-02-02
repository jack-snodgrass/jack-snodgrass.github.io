import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
import { baseUrl } from './config';

fixture('auckland-Journey').page(baseUrl);

test('Logo is present on homepage and first link works', async (t) => {
  const getLocation = ClientFunction(() => document.location.href);

  const homeSelector = Selector('[data-testid="home"]')

  await t.click(Selector('a').withText('Sprint 1 Cultural Blog'));

  await t.click(homeSelector);
  await t
    .expect(getLocation())
    .eql(`${baseUrl}/`);

});