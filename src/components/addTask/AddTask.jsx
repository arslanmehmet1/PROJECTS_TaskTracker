import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

const AddTask = ({ getData }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    console.log(newTask);
    addNewTask(newTask);
    setTask("");
    document.querySelector("#formTask").value = "";
    setDate("");
    document.querySelector("#formDate").value = "";
  };

  const addNewTask = async (newTask) => {
    const url = "https://6351821b3e9fa1244e60878b.mockapi.io/api/task";

    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            id="formTask"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            id="formDate"
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary btn-lg w-50" type="submit">
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
