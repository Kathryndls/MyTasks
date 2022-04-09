const get = document.getElementsByClassName('obtain');
const btn = document.getElementById('btn');
const rslt = document.getElementById('sum');

btn.addEventListener('click', func);

function func() {
    let sum = 0;
    for (let i = 0; i < get.length; i++) {
        sum += +get[i].value;
    }
    rslt.innerHTML = "всего: " +sum;
}