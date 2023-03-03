//changes in the api
fetch("https://jsonplaceholder.typicode.com/todos/", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    userId: 6,
    id: 300,
    title: "Learn fetch API",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
