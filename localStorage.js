/**
 *  It is a part of the web storage API
 *  It's used to store key-value pair of data
 *  Data persists even after browser is closed and reopened or after computer restart.
 *  It is domain-specific meaning each domain's local storage data will be handled independently.
 *  Storage size is typically 5MB/domain
 *  Only allows data of string type. Any other type should be converted.
 *  It is a synchronous API.
 *  It has no expiration.
 */

/**
 * Use Cases:
 *  It is used to store user preferences like theme and language preferences.
 *  It is used to cache data from the API whose response will not change frequently.
 *  It is used to store form data temporarily in a multi-step form for better experience.
 */

/** setItem() */
localStorage.setItem("concept", "JS");
const user = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};
/** if the object 'user' is not serialized i.e., JSON.stringify then JS will use toString()
 *  method implicitly
 */
localStorage.setItem("userData", JSON.stringify(user));

/** getItem() */
console.log("getItem() string as value=========>",localStorage.getItem("concept"));
console.log("getItem() object as value=========>", JSON.parse(localStorage.getItem("userData")));
// JSON.parse is used to deserialize the serialized object.

/** removeItem() */
// localStorage.removeItem("userData"); 

/** clearAll() */
// localStorage.clear() // clears all local storage data
