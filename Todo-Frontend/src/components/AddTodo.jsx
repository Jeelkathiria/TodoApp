import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={todoName}
          onChange={handleNameChange}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={dueDate}
          onChange={handleDateChange}
          className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={handleAddButtonClicked}
          className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
