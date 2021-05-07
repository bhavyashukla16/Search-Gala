import React, { useState } from "react";
import firebase from './firebase'

export default function Upload() {

  const [ selectedFile, setSelectedFile ] = useState(null);

  const fileEventHandler = (event) => {
     setSelectedFile(event.target.files[0])
     };

  const fileUploadHandler = () => {
    let bucketName = 'files'
    let storageRef = firebase.storage().ref(`${bucketName}/${selectedFile.name}`)
    let uploadFile = storageRef.put(selectedFile)
    uploadFile.on(firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        let downloadUrl = uploadFile.snapshot.downloadUrl
      })
  };

  return (
    <div className="App">
      <input type="file" onChange={fileEventHandler} />
      <button type="submit" onClick={fileUploadHandler}>
        {" "}
        Upload{" "}
      </button>
    </div>
  );
}