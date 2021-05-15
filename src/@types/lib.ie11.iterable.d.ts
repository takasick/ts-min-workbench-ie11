interface SymbolConstructor {
    /**
     * A method that returns the default iterator for an object. Called by the semantics of the
     * for-of statement.
     */
    readonly iterator: symbol;
}

interface Iterator<T, TReturn = any, TNext = undefined> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return?(value?: TReturn): IteratorResult<T, TReturn>;
    throw?(e?: any): IteratorResult<T, TReturn>;
}

interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
    [Symbol.iterator](): IterableIterator<T>;
}

interface IteratorYieldResult<TYield> {
    done?: false;
    value: TYield;
}

interface IteratorReturnResult<TReturn> {
    done: true;
    value: TReturn;
}

type IteratorResult<T, TReturn = any> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;

interface Map<K, V> {
    /** Returns an iterable of entries in the map. */
    [Symbol.iterator](): IterableIterator<[K, V]>;

    /**
     * Returns an iterable of key, value pairs for every entry in the map.
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * Returns an iterable of keys in the map
     */
    keys(): IterableIterator<K>;

    /**
     * Returns an iterable of values in the map
     */
    values(): IterableIterator<V>;
}

interface ReadonlyMap<K, V> {
    /** Returns an iterable of entries in the map. */
    [Symbol.iterator](): IterableIterator<[K, V]>;

    /**
     * Returns an iterable of key, value pairs for every entry in the map.
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * Returns an iterable of keys in the map
     */
    keys(): IterableIterator<K>;

    /**
     * Returns an iterable of values in the map
     */
    values(): IterableIterator<V>;
}

interface Set<T> {
    /** Iterates over values in the set. */
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * Returns an iterable of [v,v] pairs for every value `v` in the set.
     */
    entries(): IterableIterator<[T, T]>;
    /**
     * Despite its name, returns an iterable of the values in the set.
     */
    keys(): IterableIterator<T>;

    /**
     * Returns an iterable of values in the set.
     */
    values(): IterableIterator<T>;
}

interface ReadonlySet<T> {
    /** Iterates over values in the set. */
    [Symbol.iterator](): IterableIterator<T>;

    /**
     * Returns an iterable of [v,v] pairs for every value `v` in the set.
     */
    entries(): IterableIterator<[T, T]>;

    /**
     * Despite its name, returns an iterable of the values in the set.
     */
    keys(): IterableIterator<T>;

    /**
     * Returns an iterable of values in the set.
     */
    values(): IterableIterator<T>;
}
