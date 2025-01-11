import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((buff) => {
      console.log(`${buff[0].body} ${buff[1].firstName} ${buff[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
