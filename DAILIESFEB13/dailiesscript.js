// Lyric from Vigilante by Taylor Swift from Midnights Album
let myString = 'Draw the cat eye sharp enough to kill a man';
myString.startsWith('Draw');
console.log(myString.startsWith('Draw'));

console.log (myString); //Output of the string will be the letter P.
document.getElementById("heading").innerHTML = myString;

myString.includes('cat');
console.log(myString.includes('cat'));
document.getElementById("includesStr").textContent = myString.includes('cat');

myString.endsWith('man');
console.log(myString.endsWith('man'));
document.getElementById("endStr").textContent = myString.endsWith('man');


myString.toLowerCase('draw');
document.getElementById("lowerStr").textContent = myString.toLowerCase('draw');

console.log(myString.toLowerCase('draw'));
console.log(myString.trim());

//let myMessage = 'x marks the spot, where we fell apart';

//myMessage = myMessage.replace('x marks', 'there goes');