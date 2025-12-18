/**
 *  Why Promises ?
 *    To eliminate callback hell (pyramid of doom) - Before promises handling multiple
 *  async operation was done with nested callbacks which makes the code unreadable and
 *  difficult to maintain. After promises it has become easy to overcome it by chaining multiple 
 *  promises.
 *
 *    Inversion of control - We loose control when using callbacks, because we pass the
 *  callback function to another function to call it after completing a certain task.Doing so
 *  we loose our control to another function which may or may not call it depending on the
 *  code inside it and if async call inside it will get completed or not. promise itself gives 
 *  developer control to call the function after promise has fulfilled or rejected
 *
 *    Better error handling - Before promises error handling in a deeply nested callback
 *  was difficult as we need to have error handling at each callbacks making the error-
 *  handling code repetitive. With promises, error handling became more centralized
 *
 *    Parallel execution - Promises allows execution of multiple async operations
 *  concurrently.
 */

/**
 *  What is Promise?
 *    It is an object representing the eventual completion or failure of an async operation.
 *    A promise can be resolved or rejected only once.
 */

/**
 *  States:
 *    Pending - async operation in progress
 *    Fulfilled(Resolved) - async operation completed successfully
 *    Rejected - async operation rejected with a reason
 */

/** Basic Structure */
const myPromise = new Promise((resolve, reject) => {
  const success = false; // if the async operation is success

  if (success) {
    resolve("Data fetched successfully!");
  } else {
    reject("Error fetching data.");
  }
});

myPromise
  .then((value) => console.log("then value==>", value))
  .catch((error) => {
    console.log("error===>", error);
  })
  .finally(() => {
    console.log("Operation completed."); // Always runs, regardless of success or failure
  });

/** Chaining Promises */

function getUserData() {
  return new Promise((resolve, reject) => {
    /**
     * the executor function runs synchronously, so setTimeout is called as soon as we enter the
     * executor function block
     */
    console.log("Before userdata timeout=====>");
    setTimeout(() => console.log('firstset'),1000)
    setTimeout(() => {
      const data = { name: "John", age: 25 };
      resolve(data); // Resolving with user data
    }, 1000);
    setTimeout(() => console.log('secondset'),1000)
    console.log("After userdata timeout=====>");
  });
}

function processData(data) {
  return new Promise((resolve) => {
    console.log("Before process data timeout=====>");
    setTimeout(() => {
      data.age += 1; // Process the data
      resolve(data);
    }, 1000);
    console.log("After process data timeout=====>");
  });
}

getUserData()
  .then((userData) => {
    console.log("User data fetched:", userData);
    return processData(userData); // Passing the result to the next promise
  })
  .then((updatedData) => {
    console.log("Processed user data:", updatedData); // Processed data
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/** Promise.all() */
// It waits until all the promises passed to it gets resolved or rejected
// If one fails then entire promise gets rejected
const fetchUser = new Promise((resolve) => {
  console.log("Before User fetched=======>");
  setTimeout(() => resolve("User fetched"), 1000);
});

const fetchPosts = new Promise((resolve) => {
  console.log("Before Posts fetched=======>");
  setTimeout(() => resolve("Posts fetched"), 2000);
});

const fetchComments = new Promise((resolve) => {
  console.log("Before comments fetched=======>");
  setTimeout(() => resolve("Comments fetched"), 1500);
});

Promise.all([fetchUser, fetchPosts, fetchComments])
  .then((results) => {
    console.log(results); // ["User fetched", "Posts fetched", "Comments fetched"]
  })
  .catch((error) => {
    console.error("Promise.all() Error=======>", error);
  });

const fastPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Fast promise resolved"), 1000);
});

const slowPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Slow promise resolved"), 3000);
});

/** Promise.allSettled() */
//  Waits for all promises to get resolved or rejected and provide the outcome of all promises
//

const promise1 = Promise.resolve("Success 1");
const promise2 = Promise.reject("Error 2");
const promise3 = Promise.resolve("Success 3");

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result) => {
    console.log("result===>", result);
    if (result.status === "fulfilled") {
      console.log("Resolved:", result.value);
    } else {
      console.log("Rejected:", result.reason);
    }
  });
});

/** Promise.race() */
// It returns a promise that resolves or rejects as soon as one of the promise gets completed or rejected.

Promise.race([fastPromise, slowPromise])
  .then((result) => {
    console.log(result); // "Fast promise resolved"
  })
  .catch((error) => {
    console.error(error);
  });

/** Promise.any() */
// It resolves as soon as a promise among the array passed to it gets resolved

const promiseA = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "Error 1")
);
const promiseB = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Success 2")
);
const promiseC = new Promise((resolve, reject) =>
  setTimeout(reject, 1500, "Error 3")
);

Promise.any([promiseA, promiseB, promiseC])
  .then((result) => {
    console.log(result); // "Success 2" because promiseB resolves successfully first
  })
  .catch((error) => {
    console.error(error); // Will not reach this since one promise resolves
  });

/**
 *  References:
 *    https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke
 *
 */

const promise = new Promise((resolve, reject) => {
  const promise2 = Promise.reject('error').then(() => {
    console.log(1)
  }, () => {
    console.log(2)
  })
  .then(() => console.log(3))
  resolve(promise2)
});
promise.then(console.log);
