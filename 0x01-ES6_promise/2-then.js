// eslint-disable-next-line no-unused-vars
export default function handleResponseFromAPI(promise) {
  return Promise.resolve({ status: 200, body: 'Success' })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return new Error('');
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
};
