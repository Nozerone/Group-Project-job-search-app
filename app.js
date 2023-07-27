//function saves user search input to local storage

//Submit search form function

//subit event handler

//for loop for array of object fetched results

//function to display results

//function to display random motivational quotes



// ADZUNA 

// fetch('http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=d4917318&app_key=39639ccbd3d4bede5ac35be1d8b49c87&results_per_page=10&what=javascript%20developer&content-type=application/json', {
//   method: "GET", 
//   mode: 'cors',
//   credentials: 'same-origin',
//   cache: "reload", 
//   redirect: 'follow',
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });



document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=d4917318&app_key=39639ccbd3d4bede5ac35be1d8b49c87&results_per_page=5&what=javascript%20developer&content-type=application/json');
  const data = await response.json();

  const jobContainer = document.getElementById('jobContainer');

  data.results.forEach(result => { 
    const { title, description, location, company } = result;
  
    const jobDiv = document.createElement('div');
    console.log(jobDiv);
    jobDiv.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <p>${location.display_name}</p>
      <p>${company.display_name}</p>
    `;

    jobContainer.appendChild(jobDiv);
  });
});

//   Inspirational Quote API

// https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();

  })
  .then(function(data) {
    var randomIndex = Math.floor(Math.random() * data.length);
    var randomQuote = data[randomIndex];
    console.log(randomQuote);

    const quoteDiv = document.getElementById('quoteContainer')
    quoteDiv.textContent = randomQuote.text + randomQuote.author

  })