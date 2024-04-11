// eslint-disable-next-line no-unused-vars
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

const success = false; 
getFullResponseFromAPI(success)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
