import React from 'react'
import PersistentModal from '../../../components/ProjectModal/PersistentModal';

const Contact = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 
      'center', alignItems: 'center', height: '20vh'}}>
          <h1>New Project</h1>
          <br/>
          <PersistentModal />
      </div>
    </div>
  )
}

export default Contact;