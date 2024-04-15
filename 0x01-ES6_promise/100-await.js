import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const response = {};
  try {
    const photoResponse = await uploadPhoto();
    response.photo = photoResponse;
  } catch (error) {
    response.photo = null;
  }
  try {
    const userResponse = await createUser();
    response.user = userResponse;
  } catch (error2) {
    response.user = null;
  }
  return response;
}
