import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../context/ProductContextProvider";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { API } from "../helpers/const";

const EditProduct = () => {
  const { getTodos, todos, editTodo } = useContext(productContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const [todoDetail, setTodoDetail] = useState("");
  const [title, setTitle] = useState(todoDetail.todoName);
  const [lastTitle, setLastTitle] = useState(todoDetail.todoLastName);
  const [number, setNumber] = useState(todoDetail.todoPhone);
  const [picture, setPicture] = useState(todoDetail.todoImg);

  useEffect(() => {
    getTodos(id);
  }, [id]);

  const getTodoId = async () => {
    const { data } = await axios(`${API}/${id}`);
    console.log(data);
    setTodoDetail(data);
    setTitle(data.todoName);
    setLastTitle(data.todoLastName);
    setNumber(data.todoPhone);
    setPicture(data.todoImg);
  };
  useEffect(() => {
    getTodoId();
  }, [id]);
  console.log(todoDetail);
  console.log(todos);
  console.log(id);

  console.log(title);

  const handleClick = async () => {
    if (!title || !lastTitle || !number || !picture) {
      return;
    }
    let newTodo = {
      todoName: title,
      todoLastName: lastTitle,
      todoPhone: number,
      todoImg: picture,
    };
    await editTodo(id, newTodo);
    navigate("/");
  };

  return (
    <div>
      <TextField
        value={title}
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        value={lastTitle}
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setLastTitle(e.target.value)}
      />
      <TextField
        value={number}
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setNumber(e.target.value)}
      />
      <TextField
        value={picture}
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setPicture(e.target.value)}
      />
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default EditProduct;
