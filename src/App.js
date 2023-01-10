import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about/about';
import Contact from './pages/contact-us/contact-us';
import Services from './pages/services/services';
import SignUp from './pages/login/Signup';
import Signin from './pages/login/Signin';
import Account from './pages/login/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<Signin/>} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>      
        
      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
