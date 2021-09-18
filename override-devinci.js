document.getElementsByTagName("body")[0].classList.add("override")


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