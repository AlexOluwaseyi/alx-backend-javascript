// eslint-disable-next-line no-unused-vars
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' }); // Corrected: Object should not be a string
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Usage of the getFullResponseFromAPI function
const success = false; // or false for error case
getFullResponseFromAPI(success)
  .then((result) => {
    console.log(result); // Logging the resolved result
  })
  .catch((error) => {
    console.log(error); // Logging the rejected error
  });
