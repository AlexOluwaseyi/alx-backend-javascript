// eslint-disable-next-line no-unused-vars
export default function handleResponseFromAPI(promise) {
  return promise
  // eslint-disable-next-line no-unused-vars
    .then((data) => ({ status: 200, body: 'success' }))
  // eslint-disable-next-line no-unused-vars
    .catch((error) => ({}))
    .finally(() => {
      console.log('Got a response from the API');
    });
}
