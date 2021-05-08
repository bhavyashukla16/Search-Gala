import React from 'react';
import extraction from '../extraction';

import { Image, Item } from 'semantic-ui-react';
const Display = (props) => {
  const { files } = extraction('files');

  return (

    
    <Item.Group>
    {console.log(props.search)}
    
      {files && props.search && files. filter(file=> file.name.toLowerCase().includes(props.search.toLowerCase()) ).map(file => (
       
     
       <Item>
         <Item.Image size='large' src={file.url}  />
   
         <Item.Content>
           <Item.Header as='a'>{file.name}</Item.Header>
          
         </Item.Content>
    </Item>
   
   
       
       
      ))}
       </Item.Group>
    
    
    
   
  )
}

export default Display;
