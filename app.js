// ADZUNA 

fetch('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=d4917318&app_key=39639ccbd3d4bede5ac35be1d8b49c87', {
  method: "GET", 
  mode: 'cors',
  credentials: 'same-origin',
  cache: "reload", 
  redirect: 'follow',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


//   Inspirational Quote API

// https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373

// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });
