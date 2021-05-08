import React from 'react';
import extraction from '../extraction';
import { motion } from 'framer-motion';

const Display = (props) => {
  const { files } = extraction('files');

  return (

    <div >
    {console.log(props.search)}
      {files && props.search && files. filter(file=> file.name.toLowerCase().includes(props.search.toLowerCase()) ).map(file => (
        <motion.div className="img-wrap" key={file.id} 
          layout
          whileHover={{ opacity: 1 }}s
          //onClick={() => setFile(file.url)}
        >
          <motion.img src={file.url} alt="uploaded file"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default Display;