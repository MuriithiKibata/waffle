const h2 = document.createElement('h2')
h2.textContent = "This content was added by JavaScript"
document.querySelector("body").appendChild(h2)

document.addEventListener ('click', cat)
function cat() {
    
    document.getElementById("acc").innerHTML = alert("Continue to Website?")
} 
document.addEventListener ('click', style)
function style() {
    document.getElementById("bnb").innerHTML= alert("Continue to Website?")
}
document.addEventListener('click', not)
function not () {
    document.getElementById("saf").innerHTML = alert("Continue to Website?") 
}
document.addEventListener('click', trip)
function trip() {
    document.getElementById("saf").innerHTML = alert("Continue to Website?")
} 
document.addEventListener('click', over)
function over () {
    document.getElementById("fl").innerHTML = alert("Continue to Website?")
}