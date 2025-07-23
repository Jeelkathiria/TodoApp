function TodoItem({ id, todoName, todoDate, onDeleteClick }) {
  return (
    <div className="max-w-2xl mx-auto p-4 mb-3 bg-white shadow-md rounded-lg space-y-2 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
      <div className="text-base font-medium text-gray-800 break-words">
        📌 {todoName}
      </div>
      <div className="text-sm text-gray-600">
        🗓️ {todoDate}
      </div>
      <div>
        <button
          type="button"
          onClick={() => onDeleteClick(id)}
          className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem;