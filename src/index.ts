import { arrayFrom } from './lib.ie11.core.js';

import {
  mapBuilder,
  weakMapBuilder,
  setBuilder,
  weakSetBuilder,
} from './lib.ie11.collection.js';

import { mapEntries, setKeys } from './lib.ie11.iterable.js';

import './lib.ie11.dom.js';

(function main(...args) {
  const u1 = new URL('https://example.com/test?t=1&u=2#index');
  console.log(u1);

  // Map
  const m1 = mapBuilder([
    [1, 3],
    [2, 4],
  ]);

  for (let i of mapEntries(m1)) {
    console.log(i);
  }

  // ReadonlyMap
  const m2: ReadonlyMap<string, number> = mapBuilder([
    ['a1', 3],
    ['a2', 4],
  ]);

  for (let i of mapEntries(m2)) {
    console.log(i);
  }

  // WeakMap
  const wm1 = weakMapBuilder([
    [m1, 'Map1'],
    [new Object(), 'Map2'],
  ]);
  console.log(wm1);
  console.log(wm1.get(m1));

  // Set
  const s1 = setBuilder([1, 3]);

  for (let i of setKeys(s1)) {
    console.log(i);
  }

  // ReadonlySet
  const s2: ReadonlySet<string> = setBuilder(['a1', 'a2']);

  for (let i of setKeys(s2)) {
    console.log(i);
  }

  const ws1 = weakSetBuilder([m1, s1]);

  console.log(ws1);
  console.log(ws1.has(m1));

  console.log(args);
  for (let i of arrayFrom(arguments)) {
    console.log(i);
  }

})('arg1', 'arg2');

/*
(function test(): void {
  // 連想配列風オブジェクト
  const t4d = {
    k1: 'a',
    k2: 2,
    k3: false,
    4: 4,
    5: undefined,
  };

  const t4r1 = objectEntries(t4d);
  console.log('objectEntries(): [string, T][] ');
  console.log(t4r1);

  const t4r2 = mapBuilder(t4r1);
  console.log('');
  console.log('mapBuilder(): Map<T, U> ');
  console.log(t4r2);

  const t4r3 = mapEntries(t4r2);
  console.log('');
  console.log('mapEntries(): [T, U][] ');
  for (let [k, v] of t4r3) {
    console.log(`KEY: ${k} VAL: ${v} `);
  }

  console.log('');
  console.log('test5: Class Object to Array to Map to Array ----- ');

  // ビルトインオブジェクト
  const t6d = arguments;

  const t6r1 = objectEntries(t6d);
  console.log('objectEntries(): [string, T][] ');
  console.log(t6r1);

  const t6r2 = mapBuilder(t6r1);
  console.log('');
  console.log('mapBuilder(): Map<T, U> ');
  console.log(t6r2);

  const t6r3 = mapEntries(t6r2);
  console.log('');
  console.log('mapEntries(): [T, U][] ');
  console.log(t6r3);
})();
*/
