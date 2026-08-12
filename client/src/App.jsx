import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"

function App() {
  // return <h1> Hello Pawpal</h1>
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      </Routes></BrowserRouter>
  )
}

export default App;