import React, { useEffect, useState } from "react";
import Tasklist from "./Tasklist";
import InputForm from "./InputForm";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Home = () => {
  const [Tasks, setTasks] = useState([]);
  const [isReload, setIsReload] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const mytask = Tasks.filter((Tasks) => Tasks.userEmai === user?.email);
  useEffect(() => {
    fetch("https://quiet-coast-74247.herokuapp.com/Tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [isReload]);

  // ---------------------------------------------------
  const handleADDtask = (event) => {
    event.preventDefault();
    const taskName = event.target.taskName.value;
    const taskDescription = event.target.taskDescription.value;
    const userEmai = user.email;

    fetch("https://quiet-coast-74247.herokuapp.com/Task", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({ taskName, taskDescription, userEmai }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`${taskName} task has been added`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsReload(!isReload);
        event.target.reset();
      });
  };
  // ---------------------------------------------------
  const handleDelete = (task) => {
    fetch(`https://quiet-coast-74247.herokuapp.com/Task/${task._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsReload(!isReload);
        toast.error(`${task.taskName} task Deleted`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div>
      <div class="p-3 mb-2 bg-secondary text-white">
        <p className="container text-center text-uppercase fs-2 ">
          Make your to-do list
        </p>
      </div>
      <InputForm handleADDtask={handleADDtask}></InputForm>
      <Tasklist Tasks={mytask} handleDelete={handleDelete}></Tasklist>
    </div>
  );
};

export default Home;
