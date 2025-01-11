import { queryAPI, weakMap } from "./100-weak.js";

test("queryAPI is implemented correctly", () => {
  const endpoint = { protocol: 'http', name: 'getUsers' };
  expect(weakMap.has(endpoint)).toBe(false);
  queryAPI(endpoint);
  expect(weakMap.has(endpoint)).toBe(true);
  expect(weakMap.get(endpoint)).toBe(1);
  queryAPI(endpoint);
  expect(weakMap.get(endpoint)).toBe(2);
  queryAPI(endpoint);
  queryAPI(endpoint);
  expect(() => {
    queryAPI(endpoint);
  }).toThrowError('Endpoint load is high');
});
