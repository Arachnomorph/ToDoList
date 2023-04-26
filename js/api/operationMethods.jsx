import { API_KEY, API_URL } from "./constants";

const getOperations = (id, successCallback) => {
  fetch(`${API_URL}/tasks/${id}/operations`, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error === false && typeof successCallback === "function") {
        successCallback(data.data);
      }
    })
    .catch((err) => console.log(err));
};

export { getOperations };
