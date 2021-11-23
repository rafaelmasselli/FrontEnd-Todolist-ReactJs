const api = {
  apiURL: "https://backend-list.herokuapp.com",
  fetchGetAll: () => fetch(api.apiURL),
  fetchGetById: (id) => fetch(`${api.apiURL}/${id}`),
  fetchPost: (dado) => {
    return fetch(`${api.apiURL}/New`, {
      method: "POST",
      body: JSON.stringify(dado),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  },
  fetchDelete: (id) => {
    return fetch(`${api.apiURL}/${id}`, {
      method: "DELETE",
    });
  },
  fetchPut: (tarefa, id) => {
    return fetch(`${api.apiURL}/${id}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(tarefa),
    });
  },
};

export default api;
