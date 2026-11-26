import {Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreteSiswa from "./pages/CreateSiswa"
import EditSiswa from "./pages/EditSiswa";

function App(){
  return(
    <>
    <Navbar/>
    <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/siswa/create" element={<CreteSiswa/>}/>
      <Route path="/siswa/edit/:id" element={<EditSiswa/>}/>
        </Routes>
        </main></>
  )
};

export default App;