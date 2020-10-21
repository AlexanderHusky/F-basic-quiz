const url = "localhost:8080/users/1";
const getUser = async (id) => {
  return fetch(`${url}/${id}`, {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  }).then((res) => {
    return res.json();
  });
};
getUser(1);
// export { getUser };
