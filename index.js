var circle=document.querySelector(".lower");
var upper=document.querySelector('.upper');
var body=document.body;

upper.addEventListener('click',function()
{
    circle.classList.toggle("lowerclass")
    body.classList.toggle("bodyclass")
})