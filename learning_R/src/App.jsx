import {  Routes, Route} from "react-router-dom";
import Myprojects from "./pages/myprojects.jsx";
import Aboutme from "./pages/aboutme.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";





function App() {

  return (
    <>

        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />}/>
          <Route path="/myprojects" element={<Myprojects />}/>
        </Routes>




    </>
  )
}

export default App;
