import React from 'react';

interface StudentCardProps {
  name: string;
  age: number;
  class: string;
  RollNumber: number;
}

const StudentCard: React.FC<StudentCardProps> = (props) => {
  return (
    <>
    <div className="inline-flex flex-col student-card gap-3 border-2 rounded-lg h-28 w-60 px-4 overflow-x-hidden mx-auto">
      <h2 className='font-bold'>{props.name}</h2>
      <div className='flexs gap-5'>
      <div>{props.age} years old</div>
      <div> Class: {props.class}</div>
      <div>Roll Number: {props.RollNumber}</div>
    </div>
    </div>
    </>
  );
};

export default StudentCard;