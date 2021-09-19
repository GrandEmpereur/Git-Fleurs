// Respectively add classes "override" and "footer-custom" to body and footer to target and override more easily
document.getElementsByTagName("body")[0].classList.add("override")
document.getElementsByTagName("footer")[0].classList.add("footer-custom")

// Loops adding unique class to social-box and row-fluid elements to target them individually
var i = 1
document.querySelectorAll(".social-box").forEach(function(element){
    let maClass = 'custom-'+i
    element.classList.add(maClass)
    i++
})

var i = 1
document.querySelectorAll(".row-fluid").forEach(function(element){
    let maClass = 'custom_'+i
    element.classList.add(maClass)
    i++
})


