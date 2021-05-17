function arrayFrom<T>(target: ArrayLike<T>): Array<T> {
  return [].slice.call(target);
}

export { arrayFrom };
