import axios from "axios";
import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ task, getData }) => {
  // console.log(task);

  const deleteTask = async (id) => {
    const url = "https://6351821b3e9fa1244e60878b.mockapi.io/api/task";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            key={id}
            className="mt-2 d-flex justify-content-between p-2 bg-dark text-white rounded-2"
          >
            <div>
              <h3>{task}</h3>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill
                onClick={(e) => deleteTask(id)}
                style={{
                  cursor: "pointer",
                  marginRight: "20px",
                  fontSize: "2.5rem",
                  boxShadow: "2px 2px 2px",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
