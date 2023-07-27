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
