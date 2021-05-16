// Map([iterable]) shim for IE11
function mapBuilder<T, U>(src: [T, U][]): Map<T, U> {
  const dst: Map<T, U> = new Map();
  for (const [key, val] of src) {
    dst.set(key, val);
  }
  return dst;
}

// WeakMap([iterable]) shim for IE11
function weakMapBuilder<T>(src: [object, T][]): WeakMap<object, T> {
  const dst: WeakMap<object, T> = new WeakMap();
  for (const [key, val] of src) {
    dst.set(key, val);
  }
  return dst;
}

// Set([iterable]) shim for IE11
function setBuilder<T>(src: T[]): Set<T> {
  const dst: Set<T> = new Set();
  for (const key of src) {
    dst.add(key);
  }
  return dst;
}

// WeakSet([iterable]) shim for IE11
function weakSetBuilder(src: object[]): WeakSet<object> {
  const dst: WeakSet<object> = new WeakSet();
  for (const key of src) {
    dst.add(key);
  }
  return dst;
}

export { mapBuilder, weakMapBuilder, setBuilder, weakSetBuilder };
