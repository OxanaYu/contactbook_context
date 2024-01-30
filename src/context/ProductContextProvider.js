import axios from "axios";
import React, { createContext, useState } from "react";
import { API } from "../helpers/const";
import { useParams } from "react-router-dom";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  //!==========Create================
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };

  //!==============Read================
  const getTodos = async () => {
    try {
      const { data } = await axios(API);
      setTodos(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  //!==============Delete===============
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    const del = todos.filter((elem) => elem.id !== id);
    setTodos(del);
  };

  //!=========Edit=====================

  async function editTodo(id, newTodo) {
    await axios.patch(`${API}/${id}`, newTodo);
  }

  const values = {
    addTodo,
    getTodos,
    todos,
    deleteTodo,
    // todoDetail,
    editTodo,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
