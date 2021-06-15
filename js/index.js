/* button */

const max = document.getElementById("plus");
const min = document.getElementById("minus");
const max2 = document.getElementById("add");
const min2 = document.getElementById("neg");

/* Sube valor */
max.addEventListener('click', function() {
    let up = this.parentNode.querySelector('input[type=number]') 
    up.stepUp()
})

/* Baja valor */
min.addEventListener('click', function() {
    let down = this.parentNode.querySelector('input[type=number]') 
    down.stepDown()
})

/* Sube valor */
max2.addEventListener('click', function() {
    let up = this.parentNode.querySelector('input[type=number]') 
    up.stepUp()
})

/* Baja valor */
min2.addEventListener('click', function() {
    let down = this.parentNode.querySelector('input[type=number]') 
    down.stepDown()
})