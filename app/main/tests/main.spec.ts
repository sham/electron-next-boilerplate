import getApp from './getapp';

let app;

afterEach(async () => {
  if (app && app.isRunning()) {
    return await app.stop();
  }
});
beforeEach(async () => {
  app = getApp();
  return await app.start();
});

test('application title', async () => {
  expect(await app.client.getTitle()).toBe('Home');
});

test('go to Caution', async () => {
  expect(await app.client.element('a').click().getTitle()).toBe('Caution');
});
