var cityInputbtnEl = document.getElementById("city-btn");
var jobInputbtnEl = document.getElementById("job-btn");

cityInputbtnEl.addEventListener("click", function(){
    var cityInput= document.getElementById("city").value;
    localStorage.setItem("city", cityInput);

})
jobInputbtnEl.addEventListener("click", function(){
    var jobInput = document.getElementById("job").value;
    localStorage.setItem("job", jobInput);
})
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();

  })
  .then(function(data) {
    var randomIndex = Math.floor(Math.random() * data.length);
    var randomQuote = data[randomIndex];
    console.log(randomQuote);

    const quoteDiv = document.getElementById('quoteContainer')
    quoteDiv.textContent = randomQuote.text
    const authorDiv = document.createElement("div");
    authorDiv.textContent= randomQuote.author;
    authorDiv.setAttribute("id", "authorContainer")
    quoteDiv.appendChild(authorDiv);

  })

  var searchBtn= document.getElementById("searchbtn");

  searchBtn.addEventListener('click', async () => {
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
