import React from 'react';
import extraction from '../extraction';

import { Card } from 'semantic-ui-react';
const Display = (props) => {
  const { files } = extraction('files');

  return (

    <div className="display-container">
    <Card.Group>
    {console.log(props.search)}
    
      {files && props.search && files. filter(file=> (file.name.split(".", 1)).toString().toLowerCase().includes(props.search.toLowerCase()) ).map(file => (
       
    <Card
    style={{fontSize: "1.5rem"}}
    color="orange"
    href={file.url}
    header= {file.name}
    meta={(file.type.split("/", 1)=='image') ? 'Image' : 'Document'}
    //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    />
      ))}
      </Card.Group>
    </div>
    
    
    
   
  )
}

export default Display;