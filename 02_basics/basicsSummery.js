
// ******************** ARRAYS ********************
// Arrays are ordered collections of elements.
// Can hold mixed types (but usually similar types)
// Common methods: push(), pop(), shift(), unshift(), indexOf(), includes(), join()


// ******************** SLICE vs SPLICE ********************
// slice(start, end): Returns a shallow copy, does NOT change original
// splice(start, deleteCount, ...items): Modifies original array (remove/replace/add)


// ******************** SHALLOW vs DEEP COPY ********************
// Shallow copy: references same memory (e.g., let a = b)
// Deep copy: new memory allocation (e.g., using spread [...arr], or structuredClone())
// Use deep copy to avoid unintentional mutations