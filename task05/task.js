const get = document.getElementById('obtain');
const rslt = document.getElementsByClassName('rslt');

get.addEventListener('focus', func);
get.addEventListener('blur', func2);

function func () {
    get.placeholder = '';
}
function func2() {
    if (get.value !== 0) {
        let str = get.value;
        let arr = str.split(' ');
        for (let i = 0; i < arr.length; i++) {
            rslt[i].value = arr[i];
        }
    }
    if (get.value == 0) {
        get.placeholder = 'Введите Ваши ФИО';
        for (let i = 0; i < rslt.length; i++) {
            rslt[i].value = '';
        }
    }
}
