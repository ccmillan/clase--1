import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const [todoValue, setTodoValue] = useState("");

  function handleAddTodos(newTodo) {
    const newTodosList = [...todos, newTodo];
    setTodos(newTodosList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {}
  return (
    <>
      <>
        <TodoInput
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          handleAddTodos={handleAddTodos}
        />
        <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
      </>
    </>
  );
}

export default App;
