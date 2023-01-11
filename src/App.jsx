import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Application from './pages/application/Application';
import Services from './pages/services/Services';
import SignUp from './pages/login/Signup';
import Signin from './pages/login/Signin';
import Account from './pages/login/Account';
import Profile from './pages/profile/Profile';
import Library from './pages/application/Library';
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
        <Route path='library' element={<ProtectedRoute><Library /></ProtectedRoute>}/>
        <Route path='/application' element={<Application/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<Signin/>} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
        <Route path='profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}/>     
        
      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
