import React from 'react'
import { NavLink } from 'react-router-dom';

const Library = () => {


  return (
    <div style={{display: 'flex', justifyContent: 
    'center', alignItems: 'center', height: '90vh'}}>
      <h1>Libary</h1>
      <> </>
      <NavLink to='/library/application'>
        Application
      </NavLink>
    </div>
  )
}

export default Library