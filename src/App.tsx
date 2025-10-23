import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TeacherLayout from "./layout/TeacherLayout";

function App() {
  return (
    <>  
      <Routes>
        <Route path="/teacher" element={<TeacherLayout />}>
        
        </Route>
      </Routes>
    </>
  );
}

export default App;
