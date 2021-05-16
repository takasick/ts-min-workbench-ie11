// Map.entries() shim for IE11
function mapEntries<T, U>(src: Map<T, U>): [T, U][] {
  const dst: [T, U][] = new Array();
  src.forEach(function (this: [T, U][], val, key) {
    this.push([key, val]);
  }, dst);
  return dst;
}

function iteratorToArray<T>(it: IterableIterator<T>): T[] {
  const a = [];
  for (let c = it.next(); !c.done; c = it.next()) {
    a.push(c.value);
  }
  return a;
}

export { mapEntries, iteratorToArray };
