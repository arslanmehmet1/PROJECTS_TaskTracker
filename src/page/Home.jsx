import React, { useState, useEffect } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Text Bar");
  const [task, setTask] = useState([]);
  const url = "https://6351821b3e9fa1244e60878b.mockapi.io/api/task";

  const toggle = () => {
    setIsOpen(!isOpen);
    setText(isOpen ? "Hide Text Bar" : "Show Text Bar");
  };

  //? READ
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(url);
    setTask(data);
    console.log(data);
  };

  return (
    <div>
      <div className="d-flex mt-4 justify-content-center flex-column">
        <Button
          variant="dark"
          onClick={() => {
            toggle();
          }}
        >
          {text}
        </Button>

        {!isOpen && <AddTask getData={getData} />}

        <TaskList task={task} />
      </div>
    </div>
  );
};

export default Home;
