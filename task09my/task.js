const get = document.getElementById('num');
const rslt = document.getElementById('rslt');

get.addEventListener('blur', func);

function func(e) {
    let sum = 0;
let str = e.target.value;
let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] % 2 == 1) {
            continue;
        }
        sum += +arr[i];
    }
    rslt.value = sum;
}
