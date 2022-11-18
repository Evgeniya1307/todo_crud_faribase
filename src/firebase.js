import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
 

const firebaseConfig = {
    apiKey: "AIzaSyC_fOWGon_Abjm4B7WpfWMJrc5fMztzBuQ",
    authDomain: "todo-crud-3664b.firebaseapp.com",
    projectId: "todo-crud-3664b",
    storageBucket: "todo-crud-3664b.appspot.com",
    messagingSenderId: "984628366325",
    appId: "1:984628366325:web:d0aeda6b8211e7366eeebc"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};