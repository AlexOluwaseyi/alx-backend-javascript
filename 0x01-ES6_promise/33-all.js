import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      const profile = photoResult.body;
      const firstname = userResult.firstName;
      const lastname = userResult.lastName;
      return `${profile} ${firstname} ${lastname}`;
    });
}

handleProfileSignup().then((result) => {
  console.log(result);
});
