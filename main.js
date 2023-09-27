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
// document.body.innerHTML += `
// <button id="btn" class="button-85" role="button">Button 85</button>
// <div id="container"></div>`;
// const divContainer = document.querySelector("#container");
// let divelem = document.createElement("p");
// const btnElement = document.querySelector("#btn");
// divContainer.appendChild(divelem);

// function apiChackNure() {
//   fetch("https://api.chucknorris.io/jokes/random")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       divContainer.innerHTML = `<h1>${data.value}</h1>`;
//     })
//     .catch((error) => {
//       console.error("this is an error !!!!!!!");
//     });
// }
// btnElement.addEventListener("click", apiChackNure);

const fetchWether = (city) => {
  document.querySelector("#containerr").innerHTML = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=12b7a7e272378638faa5c1aae11d1d9f`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(
        "#containerr"
      ).innerHTML += `<h1>${data.sys.country}</h1>`;

      for (const key in data.main) {
        document.querySelector("#containerr").innerHTML += `
        
        <h2>${key}:${data.main[key]}</h2>
        `;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

document.querySelector("#btn").addEventListener("click", () => {
  fetchWether(myInput.value);
});
