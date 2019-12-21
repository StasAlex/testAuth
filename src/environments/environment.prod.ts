
import { firebaseConfig } from './firebase.config';

// Please getting this data from Firebase console
// export const firebaseConfig: Record<string, string> = {
//   apiKey: 'XXXXXX',
//   authDomain: 'XXXXXX.firebaseapp.com',
//   databaseURL: 'https://XXXXXX.firebaseio.com',
//   projectId: 'XXXXXX',
//   storageBucket: 'XXXXXX.appspot.com',
//   messagingSenderId: 'XXXXXX',
//   appId: 'XXXXXX'
// };


export const environment = {
         production: true,
         firebaseConfig
       };
