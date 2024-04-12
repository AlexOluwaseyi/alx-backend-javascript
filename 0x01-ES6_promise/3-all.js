import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
  // eslint-disable-next-line no-unused-vars
    .catch((error) => {
      console.error('Signup system offline');
    });
}
