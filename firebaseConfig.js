import { collection, addDoc } from 'firebase/firestore';
import db from './firebaseConfig';

const addItem = async (item) => {
    try {
        const docRef = await addDoc(collection(db, 'items'), item);
        console.log('Document written with ID:', docRef.id);
    } catch (e) {
        console.error('Error adding document:', e);
    }
};
