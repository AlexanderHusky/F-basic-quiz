const url = "localhost:8080/users/1";
// TODO GTB-知识点: - Promise的使用不正确：这里应该是返回promise就好了，然后在调用这个api的地方使用async/await
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
// TODO GTB-知识点: - 这个module应该是用来定义和导出方法，而不是调用这个方法
getUser(1);
// export { getUser };
