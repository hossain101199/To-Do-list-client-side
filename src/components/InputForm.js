import React from "react";

const InputForm = ({ handleADDtask }) => {
  return (
    <div className="color-4D4C7D">
      <form className="container" onSubmit={handleADDtask}>
        <div className="input-group mb-3 mt-5"></div>
        <div className="mb-3 input-group">
          <span className="input-group-text">Task name</span>
          <input type="text" className="form-control" name="taskName" />
        </div>
        <div className="mb-3 input-group">
          <span className="input-group-text ">Task description</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            name="taskDescription"
          ></textarea>
        </div>
        <div className="mt-3 text-center">
          <input
            type="submit"
            value="add task"
            className="w-25 btn btn-outline-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default InputForm;
