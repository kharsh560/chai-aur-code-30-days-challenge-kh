// Task-1
const firstPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     console.log("Async task is complete!");
  //     resolve();
  //   }, 1000);
  console.log("Async task is complete!");
  resolve();
  // NOTE: Q) Is it a must to use "setTimeout" while making promises in JS?
  // And:- No, it is not a must to use setTimeout while making promises in JavaScript.
  // Promises are a native part of JavaScript's asynchronous programming capabilities and do not require setTimeout to function.
  // However, setTimeout is sometimes used in examples and tutorials to simulate tasks that show asynchronous behavior.
});
firstPromise.then(() => console.log("Pormise is now consumed."));

// Task-2
const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    // error might be anything, "true" or "false"
    // But logic is, if error is true, then go to reject, else in true case, go to resolve!
    // So if error = true; => go to reject. If error is false, go to resolve.
    // Here error = false => means, !error is true.
    if (!error) {
      resolve("Task Completed!");
    } else {
      reject("Error: " + error);
    }
  }, 2000);
});

// secondPromise
//   .then((resolvedMessage) => console.log(resolvedMessage))
//   .catch((errorMessage) => console.log(errorMessage));

// Task-3
// Function to simulate a network delay with potential failure
function simulateNetworkDelay(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success or failure
      if (Math.random() > 0.2) {
        // 80% chance of success
        resolve();
      } else {
        // 20% chance of failure
        reject("Network delay error");
      }
    }, duration);
  });
}

// Step 1: Connect to the server
function connectToServer() {
  return new Promise((resolve, reject) => {
    console.log("Connecting to server...");

    simulateNetworkDelay(1000)
      .then(() => {
        console.log("Connected to server");
        resolve();
      })
      .catch((error) => {
        reject("Failed to connect: " + error);
      });
  });
}

// Step 2: Fetch data from the server
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data from server...");

    simulateNetworkDelay(2000)
      .then(() => {
        console.log("Data fetched from server");
        resolve({ data: "Sample data from server" });
      })
      .catch((error) => {
        reject("Failed to fetch data: " + error);
      });
  });
}

// Step 3: Process the fetched data
function processData(data) {
  return new Promise((resolve, reject) => {
    console.log("Processing data...");

    simulateNetworkDelay(1500)
      .then(() => {
        console.log("Data processed");
        resolve(`Processed data: ${data.data}`);
      })
      .catch((error) => {
        reject("Failed to process data: " + error);
      });
  });
}

// Step 4: Display the processed data
function displayData(processedData) {
  return new Promise((resolve, reject) => {
    console.log("Displaying data...");

    simulateNetworkDelay(500)
      .then(() => {
        console.log(processedData);
        resolve("Data displayed successfully");
      })
      .catch((error) => {
        reject("Failed to display data: " + error);
      });
  });
}

// Chain the promises
// connectToServer()
//     .then(fetchData) // Chain fetchData after connecting to the server
//     .then(processData) // Chain processData after fetching data
//     .then(displayData) // Chain displayData after processing data
//     .then(result => {
//         console.log(result); // Final result after displaying data
//         console.log('All operations completed successfully');
//     })
//     .catch(error => {
//         console.error('An error occurred:', error);
//     });

// Task-4 & Task-5
async function secondPromiseConsumption() {
  try {
    const response = await secondPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
secondPromiseConsumption();
// In the blog app which I learnt to build, there we used appwrite for backend.
// There also, I used similar concept.
// just, instead of "secondPromise" tere was an API call, which ofcourse would be a promise only at appwrite's backend!

// Task-6
// const thirdPromise = new Promise((resolve, reject) => {
//   const response = fetch("https://api.github.com/users/kharsh560"); // Its an async task! -> an API call
//   if (response) {
//     resolve(response);
//   } else {
//     reject("Error");
//   }
// });
// thirdPromise(); -> Can't do like this; "thirdPromise is not a function"

// thirdPromise
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// NOTE: But this method is not at all correct!
// Issues:-
// 1) Immediate Execution of Fetch: fetch returns a promise, but the promise resolves asynchronously. Your check if (response) is synchronous and doesn't wait for the fetch to complete.
// 2) Wrong Response Handling: response will be a Promise object, not the actual HTTP response. Your if (response) check will always be true because a promise is always an object.
// 3) Response Parsing: The response needs to be parsed (e.g., using .json()) to access the actual data from the API, as the response object contains more metadata than just the data payload.
// Corrected Code:-
// Using fetch API to make an HTTP request
const thirdPromise = fetch("https://api.github.com/users/kharsh560"); // Async task

thirdPromise
  .then((response) => {
    if (!response.ok) {
      // Check if the response status is not OK (200)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // Log the actual JSON data to the console
    console.log("User Data:", data);
  })
  .catch((error) => {
    // Handle errors and log them
    console.error("An error occurred:", error);
  });

// Task-7
async function githubDataExtractor(url) {
  try {
    const response = await fetch(url);
    if (response) {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}

// githubDataExtractor("https://api.github.com/users/kharsh560");

// Task-8
// Promise.all() takes an iterable (like an array) of promises as input and returns a single promise that resolves when all of the input promises have resolved, or rejects when any of the input promises reject.
// Simulated API fetch functions
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Alice", id: 1 }), 1000); // Resolves after 1 second
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 2000); // Resolves after 2 seconds
  });
}

function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Comment 1", "Comment 2"]), 1500); // Resolves after 1.5 seconds
  });
}

// Using Promise.all() to run tasks concurrently
Promise.all([fetchUserData(), fetchPosts(), fetchComments()])
  .then((results) => {
    const [userData, posts, comments] = results; // DeStructuring of each of the objects in "results" array, into these variables.
    console.log("User Data:", userData); // { name: 'Alice', id: 1 }
    console.log("Posts:", posts); // ['Post 1', 'Post 2', 'Post 3']
    console.log("Comments:", comments); // ['Comment 1', 'Comment 2']
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

// Output:-
// User Data: { name: 'Alice', id: 1 }
// Posts: ['Post 1', 'Post 2', 'Post 3']
// Comments: ['Comment 1', 'Comment 2']

// Task-9
// Promise.race() takes an iterable of promises and returns a single promise that resolves or rejects as soon as one of the input promises resolves or rejects.
// Simulated API fetch functions with different timings
function fetchDataFromServerA() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Server A: Data"), 3000); // Resolves after 3 seconds
  });
}

function fetchDataFromServerB() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Server B: Data"), 2000); // Resolves after 2 seconds
  });
}

function fetchDataFromServerC() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Server C: Data"), 1000); // Resolves after 1 second
  });
}

// Using Promise.race() to take the first result
Promise.race([
  fetchDataFromServerA(),
  fetchDataFromServerB(),
  fetchDataFromServerC(),
])
  .then((result) => {
    console.log("First Resolved Data:", result); // 'Server C: Data'
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
