//changes in the api
fetch("https://jsonplaceholder.typicode.com/todos/", {
  method: "PATCH",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    completed: true,
    title: "we are going to learn PATCH method",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
