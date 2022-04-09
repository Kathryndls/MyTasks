
const get = document.getElementById('obtain');
const rslt = document.getElementById('rslt');

get.addEventListener('blur', func);

function func() {
    let sum = 0;
    let str = get.value;
    const arr = str.split(',');
    for (let i = 0; i < arr.length; i++ ) {
        sum += +arr[i];
    }
    rslt.innerHTML = sum/arr.length;
}

