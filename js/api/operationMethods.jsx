import { API_KEY, API_URL } from "./constants";

const getOperations = (taskId, successCallback) => {
  fetch(`${API_URL}/tasks/${taskId}/operations`, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data); //DEBUG
      if (data.error === false && typeof successCallback === "function") {
        successCallback(data.data);
      }
    })
    .catch((err) => console.log(err));
};

const addOperation = function (taskId, data, successCallback) {
  fetch(`${API_URL}/tasks/${taskId}/operations`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: API_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.error === false && typeof successCallback === "function") {
        successCallback(data.data);
      }
    })
    .catch((err) => console.log(err));
};

export { getOperations, addOperation };
