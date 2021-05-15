import { defProp, _glo } from './lib.js';

// Map constructor
defProp(_glo, 'Map', function () {
  const _super = _glo.Map;
  return function constructor<T, U>(a: [T, U][]) {
    const m = new _super();
    for (let c of a) {
      m.set(c[0], c[1]);
    }
    return m;
  };
});

// WeakMap constructor
defProp(_glo, 'WeakMap', function () {
  const _super = _glo.WeakMap;
  return function constructor<T, U>(a: [T, U][]) {
    const m = new _super();
    for (let c of a) {
      m.set(c[0], c[1]);
    }
    return m;
  };
});

// Set constructor
defProp(_glo, 'Set', function () {
  const _super = _glo.Set;
  return function constructor<T>(a: T[]) {
    const s = new _super();
    for (let c of a) {
      s.add(c);
    }
    return s;
  };
});
