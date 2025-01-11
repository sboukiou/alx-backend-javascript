export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  console.log(weakMap.get(endpoint));
  if (!weakMap.get(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  }
  if (weakMap.get(endpoint) >= 5) {
    throw Error('Endpoint load is high');
  }
}
