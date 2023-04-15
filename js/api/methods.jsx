import { API_KEY, API_URL } from "./constants";

const getTasks = (successCallback) => {
  fetch(API_URL + "/tasks", {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((r) => r.json())
    .then((data) => {
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
    .then(console.warn("api add method fired"))
    .catch((err) => console.error(err));
};

export { getTasks, addTask };
