import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./index.css";
import "./App.css";
import { useEffect, useState } from "react";
import { addItemToServer , getItemsFromServer , deleteItemFromServer } from "./services/itemsService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() =>{
    getItemsFromServer().then((initialItems) =>{
      setTodoItems(initialItems);
    })
  } , [])

  const handleNewItem = async (task, date) => {
    const item = await addItemToServer(task, date);
    const newTodoItems = [...todoItems, item];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    const deleteById = await deleteItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deleteById);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
