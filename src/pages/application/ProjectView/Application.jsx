import React from 'react'
import PersistentModal from '../../../components/ProjectModal/PersistentModal';
import NewProject from '../../../components/NewProject/NewProject';
import { Input, Button } from 'antd';

const Contact = () => {
  return (
    <div>
      <div className='top-container'>
        <h1 className='project-header'>New Project</h1>
        <Input id='url-search' placeholder="Page URL" />
      </div>
      <div className='container'>
        <div className="left-side">
        </div>
        <div className="right-side">
          <PersistentModal />
        </div>
          
          
          {/*<PersistentModal />*/}
      </div>
    </div>
  )
}

export default Contact;