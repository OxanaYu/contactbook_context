import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TodoItem = ({
  todoName,
  todoLastName,
  todoPhone,
  todoImg,
  id,
  deleteTodo,
}) => {
  console.log(id);
  return (
    <div className="contact_card">
      <h3>{todoName}</h3>
      <h3>{todoLastName}</h3>
      <h4>{todoPhone}</h4>
      <img src={todoImg} alt="" />
      <Button onClick={() => deleteTodo(id)}>Delete</Button>
      <Link to={`/edit/${id}`}>
        <Button>Edit</Button>
      </Link>
      <Button>Details</Button>
    </div>
  );
};

export default TodoItem;
