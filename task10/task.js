const get = document.getElementById('num');
const btn = document.getElementById('btn');
const rslt = document.getElementById('rslt');

this.addEventListener('click', func);

function func() {
    let str = get.value;
    let now = new Date();
    let yearNow = now.getFullYear();
    rslt.innerHTML = yearNow - str;
}    


