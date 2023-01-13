import React, { useState } from 'react'
import PageView from '../../../components/ProjectModal/PageView';
//import NewProject from '../../../components/NewProject/NewProject';
import { Input } from 'antd';

const Contact = () => {

  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
      });
  };



  return (
    <div className='main-container'>
  <div className='top-container'>
    <h1 className='project-header'>New Project</h1>
    <Input id='url-search' placeholder="Page URL" type='search' />
  </div>
  <div className='container'>
    <div className="left-side">
      <form onSubmit={handleSubmit}>
      <Input 
        id='question-box' 
        placeholder='Ask a question about the text' 
        type="text"
        onChange={(e) => setMessage(e.target.value)}      
      />
      <button type="submit">Submit</button>
      </form>
      <h1>{response}</h1>
    </div>
    <div className="right-side">
      <PageView />
    </div>
  </div>
</div>


  )
}

export default Contact;

/*

const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="response">{response}</div>
    </div>
  );

*/