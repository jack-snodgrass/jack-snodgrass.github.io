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
    .eql(`${baseUrl}index.html`);

});

test('Highlight section and check it is corrct', async (t) => {
    const getLocation = ClientFunction(() => document.location.href);

    await t.click(Selector('a').withText('Sprint 1 Cultural Blog'));
  
    await t.drag('.list ul', 107, 10, {
        offsetX: 568,
        offsetY: 7
    });
    
    await t.expect(Selector('[data-testid="compassion"]').exists).eql(true);
  });

  test('Links grow in size on hover', async (t) => {
    
    const hoverLink = Selector('[data-testid="link"]')

    await t
    .hover(hoverLink)
    .expect('a.font-size').eql('40px')
  })