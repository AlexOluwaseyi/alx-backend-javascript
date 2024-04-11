// eslint-disable-next-line no-unused-vars
export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error(''));
    }
  });
}

// const promise = true;
handleResponseFromAPI()
  .then((result) => result)
  .catch((error) => error)
  .finally(() => {
    console.log('Got a response from the API');
  });
