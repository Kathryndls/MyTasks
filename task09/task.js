const get = document.getElementById('num');

get.addEventListener('blur', func);

function func(e) {
    let str = e.target.value;
    let arr2 = [];
    let arr = str.split('.');
    arr2 = arr.reverse();
    let rlt = arr2.join('-');
    e.target.value = rlt;
}