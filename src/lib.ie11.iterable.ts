// Map.entries() shim for IE11
function mapEntries<T, U>(src: Map<T, U> | ReadonlyMap<T, U>): [T, U][] {
  const dst: [T, U][] = new Array();
  src.forEach(function (val, key) {
    dst.push([key, val]);
  });
  return dst;
}

// Set.keys() shim for IE11
function setKeys<T>(src: Set<T> | ReadonlySet<T>): T[] {
  const dst: T[] = new Array();
  src.forEach(function (key) {
    dst.push(key);
  });
  return dst;
}

export { mapEntries, setKeys };

/*
import { defProp, _glo } from './lib.js';

type IItStatement<T> = {
  self: T;
  keys: any[];
  curIdx: number;
  prepare(): void;
  exec(): IteratorResult<any>;
};

function genIIt<T>(stmt: IItStatement<T>): IterableIterator<any> {
  stmt.prepare();

  const next = function (): IteratorResult<any> {
    return stmt.exec();
  };

  const iit = {
    next: next,
    [Symbol.iterator]: function () {
      return this;
    },
  };

  return iit;
}

defProp(Map.prototype, 'entries', function () {
  return function entries<T, U>(this: Map<T, U>): IterableIterator<[T, U]> {
    const stmt: IItStatement<Map<T, U>> = {
      self: this,
      keys: [],
      curIdx: 0,
      prepare: function () {
        stmt.self.forEach(function (_, key) {
          stmt.keys.push(key);
        });
      },
      exec: function () {
        const _k = stmt.keys[stmt.curIdx];
        const _v = [_k, stmt.self.get(_k)];
        stmt.curIdx++;
        const _d = stmt.curIdx > stmt.keys.length ? true : false;
        return { value: _v, done: _d };
      },
    };

    return genIIt(stmt);
  };
});

defProp(Set.prototype, 'keys', function () {
  return function keys<T>(this: Set<T>): IterableIterator<T> {
    const stmt: IItStatement<Set<T>> = {
      self: this,
      keys: [],
      curIdx: 0,
      prepare: function () {
        stmt.self.forEach(function (_, key) {
          stmt.keys.push(key);
        });
      },
      exec: function () {
        const _k = stmt.keys[stmt.curIdx];
        stmt.curIdx++;
        const _d = stmt.curIdx > stmt.keys.length ? true : false;
        return { value: _k, done: _d };
      },
    };

    return genIIt(stmt);
  };
});
*/
