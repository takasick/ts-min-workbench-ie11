function defProp(target: Object, prop: string, val: Function) {
  Object.defineProperty(target, prop, {
    configurable: false,
    enumerable: false,
    value: val(),
  });
}

const _glo = Function('return this')();

export { defProp, _glo };
