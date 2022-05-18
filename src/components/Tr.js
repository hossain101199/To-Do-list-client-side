import React, { useState } from "react";
import { toast } from "react-toastify";

const Tr = ({ index, Task, handleDelete }) => {
  const [isActive, setIsActive] = useState(false);
  const [isReload, setIsReload] = useState(false);
  // ---------------------------------------------------
  const handleomplete = (task) => {
    setIsActive((current) => !current);
    toast.success(`${task.taskName} task is done`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setIsReload(!isReload);
  };
  return (
    <tr>
      <th
        scope="row"
        className={isActive ? "text-decoration-line-through" : ""}
      >
        {index + 1}
      </th>
      <td className={isActive ? "text-decoration-line-through w-25" : "w-25"}>
        {Task.taskName}
      </td>
      <td className="w-50">{Task.taskDescription}</td>

      <td className="w-25">
        <button
          onClick={() => handleomplete(Task)}
          type="button"
          className="m-3 btn btn btn-outline-success"
        >
          {isActive ? "Incomplete" : "Complete"}
        </button>
        <button
          onClick={() => handleDelete(Task)}
          type="button"
          className="m-3 btn btn-outline-danger"
        >
          Delete task
        </button>
      </td>
    </tr>
  );
};

export default Tr;
