import { useState, useEffect } from 'react';
import firebase from './firebase'

const Extraction = (collection) => {
  const [files, setfiles] = useState([]);

  useEffect(() => {
    const unsub = firebase.firestore().collection(collection)
      
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(file => {
          documents.push({...file.data(), id: file.id});
        });
        setfiles(documents);
      });

    return () => unsub();
    
  }, [collection]);

  return { files };
}

export default Extraction;