import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  let status = [];

  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([userResult, photoResult]) => {
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
  // eslint-disable-next-line no-unused-vars
    .catch((error) => {
      console.log('Signup system offline');
    });
}
