import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContextProvider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { getTodos, todos, deleteTodo } = useContext(productContext);
  console.log(todos);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="contactList">
      {todos.map((elem) => (
        <TodoItem deleteTodo={deleteTodo} {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default TodoList;
