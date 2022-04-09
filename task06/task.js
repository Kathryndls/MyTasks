const get = document.getElementById('obtain');

get.addEventListener('blur', func2);

function func (str) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('');
        get[i][0] = arr[i][0].toUpperCase();
        arr[i] = arr[i].join('');
    }
    str = arr.join(' ');
    return str;
}

function func2 () {
    get.value = func(get.value);
}
