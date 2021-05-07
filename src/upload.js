import React, { useState } from "react";
import firebase from './firebase'
import { Button} from 'semantic-ui-react'

export default function Upload(props) {

  const [ selectedFile, setSelectedFile ] = useState(null);
  const [visible, setVisible] = useState(props.visible);

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
    setVisible(false);
  };

  return (
    <div style={{alignContent: "center"}} >
      <Modal
        basic
        onClose={() => setVisible(false)}
        onOpen={() => setVisible(true)}
        open={visible}
        size='small'
        >
      <Header icon>
        <Icon name='upload' />
        Upload File
      </Header>
      <Modal.Content>
        <input type="file" onChange={fileEventHandler} />
      </Modal.Content>
      <Modal.Actions>
        <Button 
        basic 
        color='red' 
        inverted 
        onClick={() => setVisible(false)}>
          <Icon name='remove' /> Cancel
        </Button>
        <Button 
        color='green' 
        inverted 
        onClick={fileUploadHandler}>
          <Icon name='checkmark' /> Upload
        </Button>
      </Modal.Actions>
    </Modal>
    </div>
  );
}