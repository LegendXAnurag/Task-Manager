import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList.jsx';
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
    <Routes>
      {/* <Route path="/" element={<HomeScreen/>}/> */}
      <Route path="/userlist" element={<UserList/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App