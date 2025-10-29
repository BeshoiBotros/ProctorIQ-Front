import type React from "react";

interface TeacherDashBoardStatProps{
    title: string;
    value: number;
    icon: React.ReactElement
}

function TeacherDashBoardStat(props : TeacherDashBoardStatProps) {
  return (
    <div className="stats shadow md:w-1/3 sm:w-full shadow shadow-lg bg-primary-content min-h-30">
      <div className="stat">
        <div className="stat-figure text-primary"> {props.icon} </div>
        <div className="stat-title "> {props.title} </div>
        <div className="stat-value"> {props.value} </div>
      </div>
    </div>
  );
}

export default TeacherDashBoardStat;