/**
 *  It is a part of the web storage API
 *  It's used to store key-value pair of data
 *  It is browser tab-specific.
 *  But can navigate between pages.
 *  Storage size is typically around 5MB/domain
 *  Only allows data of string type. Any other type should be converted.
 *  It is a synchronous API.
 *  It has no expiration.
 *  But data is only available until the browser tab is closed.
 *  Data will also be available if close and open it as recent tab by Ctrl + Shift + T
 */

/**
 * Use Cases:
 *  Temporarily saving user inputs in forms across page refreshes
 * or navigations (within the same browser tab).
 *  To store setting preferences for a single session like filters in an e-commerce site
 */


/** setItem() */
// sessionStorage.setItem("concept", "JS");
const user = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};
/** if the object 'user' is not serialized i.e., JSON.stringify then JS will use toString()
 *  method implicitly
 */
// sessionStorage.setItem("userData", JSON.stringify(user));

/** getItem() */
console.log(
  "getItem() string as value=========>",
  sessionStorage.getItem("concept")
);
console.log(
  "getItem() object as value=========>",
  JSON.parse(sessionStorage.getItem("userData"))
);
// JSON.parse is used to deserialize the serialized object.

/** removeItem() */
// sessionStorage.removeItem("userData");

/** clearAll() */
// sessionStorage.clear() // clears all local storage data