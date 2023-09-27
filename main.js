// fetch("https://jsonplaceholder.typicode.com/albums")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.forEach((element) => {
//       container.innerHTML += `<h2>${element.title}</h2>`;
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//jack nuri
document.body.innerHTML += `
<button id="btn">Click !</button>
<div id="container"></div>`;
const divContainer = document.querySelector("#container");
let divelem = document.createElement("p");
const btnElement = document.querySelector("#btn");
divContainer.appendChild(divelem);

function apiChackNure() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      divContainer.innerHTML = `<h1>${data.value}</h1>`;
    })
    .catch((error) => {
      console.error("this is an error !!!!!!!");
    });
}
btnElement.addEventListener("click", apiChackNure);
