import TeacherDashBoardStat from "../../components/Teacher/Dashboard/DashBoardStat";
import { FileText, GraduationCap, Activity } from "lucide-react";
import ExamsView from "../../components/Teacher/Dashboard/ExamsView";
import Header from "../../components/Teacher/Header";
import StudentsView from "../../components/Teacher/Dashboard/StudentsView";
import Footer from "../../components/Footer";

function TeacherDashboard() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Teacher Dashboard Stats */}
      <div className="container mx-auto my-10">
        <div className="flex flex-col md:flex-row  gap-15 justify-center mx-5">
          <TeacherDashBoardStat
            title="Total Exams"
            value={500}
            icon={<FileText size={50} />}
          />
          <TeacherDashBoardStat
            title="Students"
            value={1500}
            icon={<GraduationCap size={50} />}
          />
          <TeacherDashBoardStat
            title="Live Sessions"
            value={20}
            icon={<Activity size={50} />}
          />
        </div>
      </div>

      {/* Teacher Dashboard Exams View */}
      <ExamsView />

      {/* Teacher Dashboard Students View */}
      <StudentsView />

      <Footer />
    </>
  );
}

export default TeacherDashboard;
