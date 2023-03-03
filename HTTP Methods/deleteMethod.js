//changes in the api
fetch("https://jsonplaceholder.typicode.com/todos/", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));
