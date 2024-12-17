import { collection, getDocs } from 'firebase/firestore';

const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'items'));
    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;
};

import { doc, deleteDoc } from 'firebase/firestore';

const deleteItem = async (id) => {
    try {
        await deleteDoc(doc(db, 'items', id));
        console.log('Document deleted with ID:', id);
    } catch (e) {
        console.error('Error deleting document:', e);
    }
};
