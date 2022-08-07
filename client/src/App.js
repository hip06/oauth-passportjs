import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import LoginSuccess from './components/LoginSuccess'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-success/:userId/:tokenLogin' element={<LoginSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
