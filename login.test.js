
const login = require('./login');

test('Verify login with a valid email & password', async () => {
  expect.assertions(1);
  const data = await login('valid@mail.com', 'validpass');
  expect(data).toBe(200);
});

test('Verify a user cannot login with a valid email & invalid password', async () => {
  expect.assertions(1);
  const data = await login('valid@mail.com', 'invalidpass');
  expect(data).toBe(400);
});

test('Verify user cannot login with invalid email & valid password', async () => {
  expect.assertions(1);
  const data = await login('invalid@mail.com','invalidpass');
  expect(data).toBe(400);
});

test('Verify login with a valid email with a new changed password', async () => {
  expect.assertions(1);
  const data = await login('valid@mail.com', 'newvalidpass');
  expect(data).toBe(200);
});

test('Verify a user cannot login with empty fields', async () => {
  expect.assertions(1);
  const data = await login('', '');
  expect(data).toBe(400);
});

test('Verify a user cannot login with a valid email with no password', async () => {
  expect.assertions(1);
  const data = await login('valid@mail.com', '');
  expect(data).toBe(400);
});