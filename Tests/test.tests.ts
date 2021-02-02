import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
import { baseUrl } from './config';

fixture('auckland-Journey').page(baseUrl);

test('Logo is present on homepage and first link works', async (t) => {
  const getLocation = ClientFunction(() => document.location.href);

  await t.click(Selector('main').find('a').withText('7KshmNBZr5YbGYGg3zYMqe'));
  await t
    .expect(getLocation())
    .eql(`${baseUrl}/preview/standard/7KshmNBZr5YbGYGg3zYMqe`);

  await t.click(Selector('main').find('a').withText('Go back to the homepage'));
  await t.expect(getLocation()).eql(`${baseUrl}/`);
});