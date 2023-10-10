import { Route, Router, Routes } from "react-router"
import Studentdata from "./Componets/CreateEmp/Studentdata"
import ViewData from "./Componets/ViewData/ViewData"
import StudentEdit from "./Componets/Edit/Edit"

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Studentdata/>}></Route>
      <Route path="/view" element={<ViewData />}></Route>
      <Route path="/edit/:id" element={<StudentEdit/>}></Route>
    </Routes>


     </>
     
  )
}

export default App
