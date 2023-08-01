var cityInputbtnEl = document.getElementById("city-btn");
var jobInputbtnEl = document.getElementById("job-btn");

function city(){
    var cityInput= document.getElementById("city").value;
    localStorage.setItem("city", cityInput);

}
function jobTitle(){
    var jobInput = document.getElementById("job").value;
    localStorage.setItem("job", jobInput);
}
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();

  })
  .then(function(data) {
    var randomIndex = Math.floor(Math.random() * data.length);
    var randomQuote = data[randomIndex];
    console.log(randomQuote);

    const quoteDiv = document.querySelector('.box1')
    quoteDiv.textContent = randomQuote.text
    quoteDiv.setAttribute("style", "padding-left: 20px; padding-top: 20px; color: white; font-size: 30px; text-align:center;")
    const authorDiv = document.createElement("div");
    authorDiv.textContent= randomQuote.author;
    authorDiv.setAttribute("id", "authorContainer")
    quoteDiv.appendChild(authorDiv);

  })

  var searchBtn= document.getElementById("searchbtn");
  APP_ID = "826d2410";
API_KEY = "2bc00ba4de21d460a401760a4f8a0fd7";

  searchBtn.addEventListener('click', async () => {
    const jobContainer = document.getElementById('box');
    jobContainer.innerHTML="";
    jobTitle();
    city();
    var cityName= localStorage.getItem("city");
    var jobType= localStorage.getItem("job");
    const response = await fetch(`https://api.adzuna.com/v1/api/jobs/us/search/3?app_id=${APP_ID}&app_key=${API_KEY}&title_only=${jobType}&where=${cityName}`);
    const data = await response.json();
  

var divs =[];

    data.results.forEach(result => { 
      const { title, description, location, company, redirect_url } = result
      const jobDiv = document.createElement('div');
      jobDiv.innerHTML=""
      console.log(data);
      jobDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>${location.display_name}</p>
        <p>${company.display_name}</p>
        <a href="${redirect_url}"target="_blank">${redirect_url}</a>
      `;
      jobDiv.setAttribute("style","padding-left: 20px; padding-top: 20px; color: white; font-size: 30px;")

      jobContainer.appendChild(jobDiv);
    });

  });
