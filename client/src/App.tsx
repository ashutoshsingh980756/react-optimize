import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import {AddUser} from './pages/AddUser';
import './App.css';

function App() {
   

  return (
   <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add-user" element={<AddUser />} />
   </Routes>
  )
}

export default App
