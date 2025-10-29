
interface TeacherDashBoardStatProps{
    title: string;
    value: number;

}

function TeacherDashBoardStat(props : TeacherDashBoardStatProps) {
  return (
    <div className="stats shadow md:w-1/3 sm:w-full">
      <div className="stat">
        <div className="stat-title"> {props.title} </div>
        <div className="stat-value"> {props.value} </div>
      </div>
    </div>
  );
}

export default TeacherDashBoardStat;