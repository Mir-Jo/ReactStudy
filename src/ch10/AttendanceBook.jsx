import React from 'react';

const students = [
  {
    id: 1,
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

function AttendanceBook(props){
  return (
    <ul>
      {/* {students.map((student)=> {
        return <li>{student.name}</li> //key를 지정하지 않아 경고문구
      })} */}

      {students.map((student, index) => {
        return <li key={`student-id-${student.id}`}>
          {student.name};
        </li>
      })}
    </ul>
  );
}

export default AttendanceBook;