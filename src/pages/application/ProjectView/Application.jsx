import React from 'react'
import PersistentModal from '../../../components/ProjectModal/PersistentModal';
import NewProject from '../../../components/NewProject/NewProject';

const Contact = () => {
  return (
    <div>
      <div className='container'>
          <h1 className='project-header'>New Project</h1>
          <br />
          
          <NewProject />
          {/*<PersistentModal />*/}
      </div>
    </div>
  )
}

export default Contact;