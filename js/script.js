const body = document.querySelector("body");
const button = document.querySelectorAll("button");

button.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.id === "greenyellow") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "lightgreen") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "chocolate") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "cyan") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "crimson") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "darkviolet") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "tomato") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "darkorange") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "orangered") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "gold") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
