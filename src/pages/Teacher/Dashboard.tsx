import TeacherDashBoardStat from "../../components/Teacher/Dashboard/DashBoardStat";

function TeacherDashboard() {
  return (
    <>
      <div className="flex flex-col md:flex-row  gap-15">
        <TeacherDashBoardStat title="Sub Teachers" value={500} />
        <TeacherDashBoardStat title="Students" value={1500} />
        <TeacherDashBoardStat title="Live Sessions" value={200} />
      </div>
    </>
  );
}

export default TeacherDashboard;
