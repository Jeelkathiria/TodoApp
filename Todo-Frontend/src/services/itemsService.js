export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });
  const item = await response.json();
  return mapServerItemToLocalItem(item);
};

export const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/todo");
  const items = await response.json();
  return items.map(mapServerItemToLocalItem);
};

export const markCompletedOnServer = async (id, completed) => {
  const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });

  const item = await response.json();
  return mapServerItemToLocalItem(item);
};

export const deleteItemFromServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "DELETE",
  });
  const item = await response.json();
  return item._id;
};

const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    task: serverItem.task,
    date: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};
