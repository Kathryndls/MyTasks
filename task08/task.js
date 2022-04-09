const get = document.getElementById('obtain');
const rslt = document.getElementById('rslt');

get.addEventListener('blur', func);

function func() {    
    let max = 0;
    let arr2 = [];
    let str = get.value;
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
        let num = 0;
        arr2 = arr[i].split('');
        for (let j = 0; j < arr2.length; j++) {
            num += 1;		
        }
        if (num > max) {
            max = num;
        } 
    }
    rslt.innerHTML = max;
}    