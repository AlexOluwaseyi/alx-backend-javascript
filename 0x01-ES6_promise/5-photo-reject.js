export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
  // .catch((error) => console.log(error));
}
