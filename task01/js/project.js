"use strict";
// // const My$$ = 6; 
// // console.log(My$$);

// let you = 30;
// // you = '23dfr';
// // console.log(you);
// you = 'fre3454fvf';
// console.log(you);
// const consts  = {
//     s: 57
// }
// consts.s = `324me ${you}, vrgnjrnjvfd 3+4-23`;
// console.log(consts);

// 2 lesson 
// number 
// const num = 654/0; // Infinity 
// const num1 = 'frefr'/ 4; // NaN
// console.log(num1); 
// console.log(num);
// //  string 
// const str = 'rgbfdv3243324';  // string 
// console.log(str);
// bool 
// const mfdw = {
// };
// console.log(mfdw);
// console.log(typeof 1000/0)
// // symbol
// var sym = Symbol("");
// typeof sym;
// console.log(sym);
// // null  - его не сущетвует 
// //  undefined  - что-то сущкствует, но его нет 
// let grv; 
// console.log(grv);
// const flovers = {
//     fialka: 'violet',
//     orhidea: 'white',
//     moneyThree: {
//         color: 'green',
//         yearsOld: +'21',    
//         leaflets: 34,
//     }
// };
// console.log(flovers);
// console.log(flovers.moneyThree.color);
// const arr = ['fialka', 'white'];
//     console.log(arr);
// console.log('flovers', Object.entries(flovers));//  ['fialka', 'violet']
// console.log('flovers', Object.values(flovers)); // "violet"

    // 3 lesson 
    // const what = confirm('confirm');
    // console.log(typeof('what:', what));
    // const answer = +prompt('rbrfv&');
    // console.log(answer + 1);

// const flovers = {
//     fialka: 'violet',
//     orhidea: 'white',
//     moneyThree: {
//         color: 'green',
//         yearsOld: +'21',    
//         leaflets: 34
//     },
//     makeTest: function() {
//         console.log('color');
//     }
// };
// flovers.makeTest();


// lesson 13
// if (4 == 4) {
//     console.log('right');
// } else {
//     console.log('hmm..');
// }

// if (3 === !2) {
//     console.log('ok');
// } else {
//     console.log('hmm');
// }

// const min = 10;

// if (min < 9) {
//     console.log('litl');
// } else if (min > 11) {
// }

// (min === 100 ) ? console.log('ok') : console.log('err');

// const wqe = 303; 

// (wqe == '30') ? console.log('oks') : console.log('err');

// if (wqe => 30) {
//     console.log('cool');
// } else if (wqe < 29) {
//     console.log('so-so');
// } else {
//     console.log('err');
// }

// switch (wqe) {
//     case 23: 
//     console.log('err');
//     break;
//     case 30: 
//     console.log('yesdvd');
//     break;
//     default: 
//     console.log('not today');
// }

// lesson 14
// let mnm = 23; 

// while (mnm <= 43) {
//     console.log(mnm);
//     mnm++;
// }

// while (mnm <= 35) {
//     console.log(mnm);
//     mnm++;
// }

// do {
//     console.log(mnm);
//     mnm++;
// }
// while (mnm <=54);

// for (let i = 0; i <= 30; i++) {
//     if (i == 28) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
//     i++;
//     i++;
//     i++;
// }

// 16 lesson 

// function sum(a, b) {
//     return a + b;
// }

//   let result = sum(1, 2);
//   alert( result ); // 3function sum(a, b) 

// const rty = (a, b) =>  a + b;
// console.log(rty(2));

    // const calc =  (a, b) => {
    //     console.log('1');
    //     return a + b;
    // };
    // console.log(calc(3, 5));

// 17 lesson 

// const tre = 'tender';
// console.log(tre.toUpperCase());
// console.log(tre.toLowerCase());
// console.log(tre.indexOf('f'));
// console.log(tre.slice(2, 4));
// console.log(tre.slice(1));
// console.log(tre.substring(1));
// console.log(tre.substr(1, 3));

// const rf = '12.443px';
// console.log(Math.round(rf));
// console.log(parseInt(rf));
// console.log(parseFloat(rf));

// 18 lesson 

// function rf(text) {
//     console.log('tbrv');
//     setTimeout( function () {
//         console.log(54);
//     },700);
// }
// rf();

// const ed =  function() {
//     console.log(43);
// };
// const edss =  function() {
//     console.log(436);
// };
// function rf(text, callBack, edss) {
//     console.log(text);
//     callBack();
//     edss();
// };
// rf('vvf', ed, edss);

// 20 lesson 

// const obj = new Object();

// const options = {
//     name: 'test', 
//     with: 1024,
//     height: 1012,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
    // makeTest: function() {
    //     console.log('Test');
    // }
// };
// console.log(Object.keys(options).length);

// const {border, bg} = options.colors;
// console.log(border);
// console.log(options.name);
// delete options.height;
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options [key]) {
//             console.log(`svoistvo ${i} bydet imet ${options [key] [i]}`);
//             counter++;
//         }
//     } else {
//             console.log(`svoistvo ${key} bydet imet ${options[key]}`);
//         }
// }
// options.makeTest();

// const {border, bg} = options.colors; 
// console.log(border);
// console.log(options ['colors']['border']);
// delete options.name;


// 21 lesson 

// const rf = [1, 3, 4, 5, 6];
// rf.pop();
// rf.push(23);
// console.log(rf);


// for (let i = 0; i < rf.length; i++) {
//     console.log(rf[i]);
// }

// const ed = prompt('', '');
// const products = ed.split(', ');
// products.sort();
// console.log(products.join('; '));

// const ed = [9, 5, 0, 8];
// ed.sort(compareNum);
// console.log(ed);
// function compareNum(a, b) {
//     return a - b;
// }

// const rf =  [9, 5, 0, 8];
// rf.filter();
// rf.map();
// console.log(rf);

// edd.forEach(function(item, i, ed) {
//     console.log(`${i}: ${item} ${ed}`);
// });

// const ed = [34, 4, 343, 46];
// ed.sort(compareNum);
// console.log(ed);

// function compareNum (a, b) {
//     return a - b;
// }

// ed.forEach(function (item, i, ed) {
//     console.log(`${i}: ${item} dfghfv ${ed}`);
// })

// 22 lesson 


// let  d = 34,
//     f = d;

//     f = d + 23 / 2;

//     console.log(d);
//     console.log(f);

    // const  obj = {
    //     a: 54,
    //     b: 3
    // };

    // const copy = obj;

    // copy.b = 45;
    // console.log(copy);
    // console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// function sum(a, b) {
//     const f = a + b;
//     console.log('sum =', f);
//     return sum;
// }

// function rf(sum, f, g) {
//     console.log(f - g);
// }

// rf(sum(332, 43), 100, 23);

// const numbers = {
//     a: 2, 
//     b: 5,
//     c: {
//         x: 7, 
//         y: 4

//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10; 
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17, 
//     e: 20
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const rf = ['f', 'f', 'e'];
// const newRf = rf.slice();
// newRf[1] = 'vfr';
// console.log(newRf);
// console.log(rf);

// function log (a, b , c) {
// console.log(a);
// console.log(b);
// console.log(c);
// }
// const num = [23, 3];
// log(3, ...num);

// const rg = ['vr', 'rf', 4, false];

// const newRg = [...rg];
// console.log(newRg);

// const de = {
//     rf: 3,
//     tg: 4
// };

// const newDe = {...de};
// console.log(newDe);

// 22 lesson 
// let tg = 'rfgg';
// let tgObj = new String(tg);
// console.log(typeof(tg));
// console.log(typeof(tgObj));
// console.dir([1, 2, 3]);
// console.log([1, 2, 3]);

// const soldier = {
//     health: 400, 
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };
// const john = Object.create(soldier);
// john.sayHello();
// const John = {
//     health: 100
// };
// John.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);
// console.log(john.armor);

// // lesson 26 
// console.log(typeof(String(null)));
// console.log(typeof(Slotring(4)));


//  console.log(typeof(5 + 'rfrf'));
// const  fvr = 23 +'px';
// console.log(fvr);
// console.log(typeof(+ '34'));
// console.log(typeof(parseInt('15px')));
// let answer = +prompt('rgr', '');
// console.log(answer);


// let switcher = 0 || '' || null || NaN || 23;
// if(switcher) {
//     console.log(typeof('ok'));
// };

// console.log(typeof(Boolean('4')));
// console.log(typeof(!!32));




// function num (a = 1) {
//     console.log(2);
// }
// +prompt('numer 1 or 2', '');


const a = [1, 2];
function num(a) 
{
    return 3 - a;
} 
console.log(num(a[0]));
console.log(num(a[1]));