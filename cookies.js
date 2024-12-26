/**
 *  Cookies can be sent along with the response headers from the server and
 * can be sent along with the request headers from the client.
 *  Max. size / Cookie is 4KB.
 *  
 */

/**
 *  Attributes of a Cookie
 *  Name => The name of the cookie with which we can retrieve it back when needed.
 *  Value => The value associated with the cookie
 *  Expires(optional) => Expiration date of cookie. If not set it is considered as a session 
 *                       cookie and deleted when the browser is closed
 *  Max-Age(optional) => Lifetime of a cookie in seconds. If both expires and max-age is set then
 *             max-age will take the precedence.
 *  Domain(optional) => Not Set => only available to website (shop.com (backend path)) and not its sub-domain (blog.shop.com)
 *                      Set => Available to both domains and its sub-domains
 *  Path(optional) => To define which API request paths will receive the cookie set by the server to the client
 *                    If '/' => cookie sent to all pages
 *                    If '/somePath' => cookie only send to the page that request with API path '/somePath'
 *  Secure(optional) => To send cookies only over 'https' requests not in 'http' requests.
 *  HttpOnly        => Used to prevent the access and modifications to the cookie with JS(document.cookie)
 *  SameSite        => Decides to send cookies only to requests from same domain or not
 *                  If 'Strict' => only sent to same origin
 *                  If 'Lax' => send cookies when navigating from a third-party site via link click
 *                  If 'None' => send cookies to cross-origin if Secure attribute is set
 */

/**
 * Use Cases:
 *  Cookies are used for session management like user sign-in status, shopping cart contents,
 * or any other user session-related details that the server needs to remember.
 *  For user preferences such as theme and language
 *  Tracking the activity of the user which will be used for anlaytics.
 */

/** set a cookie */ 
// document.cookie = "username=JohnDoe;Max-Age=10;";

/** retrieving all cookies */
// console.log(document.cookie)// entire cookies for the domain

/** delete a cookie */
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

