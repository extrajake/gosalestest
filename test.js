const content = document.querySelector("api-content");
fetch("https://catfact.ninja/fact?max_length=140", {
  mode: "cors"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
  });
