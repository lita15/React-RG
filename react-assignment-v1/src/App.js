import "./App.css";
import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";

// TODO: answer here

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const parse = await data.json();
      // console.log(parse);
      setTodos(parse);
      setLoading(true);
    };
    getTodos();
  }, []);
  return (
    <>
      <TodoCard todos={todos} loading={loading} />
    </>
  );
};

export default App;
