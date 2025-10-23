
interface TeacherDashBoardStatProps{
    title: string;
    value: number;

}

function TeacherDashBoardStat(props : TeacherDashBoardStatProps) {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title"> {props.title} </div>
        <div className="stat-value"> {props.value} </div>
      </div>
    </div>
  );
}

export default TeacherDashBoardStat;