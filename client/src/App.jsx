import SignUp from './pages/SignUp'
import Login from './pages/Login'
// import './App.css'
import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="h-screen p-4 flex items-center justify-center w-screen">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <SignUp />} />
        
      </Routes>
      
      <Toaster/> 
    </div>
  )
}

export default App
