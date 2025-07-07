/**
 * Shallow Copy:
 *    Creates an array or an object and copies only the top level references.
 *    If the object contains nested array or objects, then the references of the nested objects
 * are shared between the shallow and the original.
 *
 */

const original = {
  name: "BFE",
  address: {
    city: "Pune",
  },
};

const shallow = { ...original }; // shallow copy with spread
// Here while copying the top-level references, address is copied by reference hence modifying it in shallow affects the original too.

shallow.name = "Frontend"; // changes only in copy
shallow.address.city = "Mumbai"; // modifies nested object, shared
shallow.address.pin = "1234"; // will reflect in original also

console.log("original==>", original);
console.log("shallow==>", shallow);

console.log(original.address.city); // Mumbai  <-- affected!

/**
 * Deep Copy:
 *    
 */
