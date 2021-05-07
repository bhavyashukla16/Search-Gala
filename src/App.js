import './App.css';
//import Upload from './upload';
import 'semantic-ui-css/semantic.min.css'
import firebase from './firebase'
import { Button, Modal, Header, Icon  } from 'semantic-ui-react'
import { useState } from 'react';

function App() {

  const [ selectedFile, setSelectedFile ] = useState(null);
  const [visible, setVisible] = useState(false);

  const fileEventHandler = (event) => {
    setSelectedFile(event.target.files[0])
    };

 const fileUploadHandler = () => {
   let bucketName = 'files'
   let storageRef = firebase.storage().ref(`${bucketName}/${selectedFile.name}`)
   let uploadImage = storageRef.put(selectedFile)
   uploadImage.on(firebase.storage.TaskEvent.STATE_CHANGED,
     () => {
       let downloadUrl = uploadImage.snapshot.downloadUrl
     })
     setVisible(false)
 };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Search Gala </h1>
        <div className="options container-fluid">
          <Button 
          style={{margin: "15px"}} 
          onClick={()=> setVisible(true)}
          compact 
          inverted 
          color='orange'> 
          Upload a new file 
          </Button>
          <Button style={{margin: "15px"}} compact inverted color='orange'> Filter </Button>
          <Button style={{margin: "15px"}} compact inverted color='orange'> Voice Typing </Button>
        </div>
        <div class="container">
          <input type="text" id="box" placeholder="Search anything..." class="search__box" />
          <i class="fas fa-search search__icon" id="icon"></i>
        </div>
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
        type="submit" 
        inverted 
        onClick={fileUploadHandler}>
          <Icon name='checkmark' /> Upload
        </Button>
      </Modal.Actions>
    </Modal>
      </header>
    </div>
  );
}

export default App;
