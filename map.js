/**
 *  Map object is collection of key-value pairs.
 *  Key can be of any type. Whereas in objects key is only of type string or symbols.
 *  The order of elements are the same as when they're declared.
 *  It is iterable.
 *  It has an in-built size property.
 *  Native Serialization (object to JSON) and Parsing (JSON to object) not supported
 *  Maps are used in place where frequent addition and removals are required.
 */

/** Creation */
let myMap = new Map();
console.log("map with constructor======>", myMap);

let myMapWithInitialization = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);
console.log("map with initialization======>", myMapWithInitialization);

/** Get all key and values */
console.log("keys()====>", myMapWithInitialization.keys());
console.log("values()===>", myMapWithInitialization.values());

/** Adding an element */
myMap.set("name", "praveen");
console.log("set()=====>", myMap);

/** Access */
console.log("get()=====>", myMap.get("name"));

/** Check existence */
console.log("has()=====>", myMapWithInitialization.has("city"));

/** Removing an element */
myMapWithInitialization.delete("city");
console.log("delete()====>", myMapWithInitialization);

/** Remove all elements */
// myMapWithInitialization.clear();
console.log("clear()=====>", myMapWithInitialization);

/** Iterate */

/** forEach */
myMapWithInitialization.forEach((value, key) =>
  console.log("forEach()===>", "key===>", key, "value===>", value)
);

/** for...of */
for (let [key, value] of myMapWithInitialization) {
  console.log("for...of with destructuring====>", key + " = " + value);
};

for (let key of myMapWithInitialization.keys()) {
  console.log("for...of key iteration====>", key);
};

for (let value of myMapWithInitialization.values()) {
  console.log("for...of values iteration====>", value);
};
