import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TeacherLayout from "./layout/TeacherLayout";
import TeacherDashboard from "./pages/Teacher/Dashboard";

function App() {
  return (
    <>  
      <Routes>
        <Route path="/teacher" element={<TeacherLayout />}>
            <Route index element ={<TeacherDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
