import React from "react";
import Tr from "./Tr";

const Tasklist = ({ Tasks, handleDelete }) => {
  return (
    <table className="container w-100 table table-hover table-responsive">
      <thead className="container">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task name</th>
          <th scope="col">Task description</th>
        </tr>
      </thead>
      <tbody>
        {Tasks.map((Task, index) => (
          <Tr
            key={index}
            index={index}
            Task={Task}
            handleDelete={handleDelete}
          ></Tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tasklist;
