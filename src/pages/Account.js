import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
//import { db } from '../firebase';
//import { getAuth, updateProfile } from '..firebase/auth';
//import { collection } from 'firebase/firestore';

const Account = () => {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out.');
    } catch (e) {
      console.log(e.message);
    }
  }

  //const [addr, setAddr] = useState('');

  // usersCollectionRef = collection(db, "addresses");

  /*const addAddr = async() => {
    await addDoc(usersCollectionRef, {address: addr});
  }*/


  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email}</p>

      <br/>

      
      <br />
      <button onClick={handleLogout} className='border-blue-500 bg-blue-600 hover:bg-blue-500 w-150 p-4 my-2 text-white'>Logout</button>
    </div>
  )
}

export default Account