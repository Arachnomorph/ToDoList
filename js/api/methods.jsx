import { API_KEY, API_URL } from "./constants";

const getTasks = (successCallback) => {
  fetch(API_URL + "/tasks", {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      if (data.error === false && typeof successCallback === "function") {
        successCallback(data.data);
      }
    })
    .catch((err) => console.log(err));
};

const addTask = (data) => {
  fetch(API_URL + "/tasks", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: API_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const removeTask = (id) => {
  fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export { getTasks, addTask, removeTask };
