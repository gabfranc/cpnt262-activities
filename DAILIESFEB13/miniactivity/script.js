let myArr = ['vanilla', 'chocolate', 'strawberry'];
let arr = 'ice Cream'
myArr.forEach((arr) => console.log(arr));

document.getElementById("arrayVal").innerHTML = myArr;

const myMap = new Map();
myMap.set('bee', 1);
myMap.set('butterfly', 2);
myMap.set('ladybug', 3);

console.log(myMap.set('bee'));

document.getElementById("myArr").textContent = myMap.set();

const myStr = 'OHR NAUR CLEORRR';

myStr.includes('OHR');
myStr.lastIndexOf('CLEORRR');

console.log(myStr.includes('OHR'));
console.log(myStr.lastIndexOf('CLEORRR'));

document.getElementById('includeArr').innerHTML = myStr.lastIndexOf('CLEORRR');