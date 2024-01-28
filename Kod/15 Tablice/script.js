let numericArray = [1, 2, 3];
let textArray = ['one', 'two', 'three'];
let booleanArray = [true, true, false];
let mixArray = [1, 'two', false];

console.log('Tablica numericArray');
console.log(numericArray);

console.log('Tablica textArray');
console.log(textArray);

console.log('Tablica booleanArray');
console.log(booleanArray);

console.log('Tablica mixArray');
console.log(mixArray);

console.log('--------------------------------------------');

console.log('Trzeci element z tablicy textArray');
console.log(textArray[2]);

console.log('Drugi element z tablicy numericArray');
let n = numericArray[1];
console.log(n);

console.log('Tablica numericArray po modyfikacji drugiego elementu');
numericArray[1] = 100;

console.log(numericArray);

console.log('Element z tablicy numericArray spoza zakresu');
console.log(numericArray[-1]);

console.log('--------------------------------------------');

console.log('Czy tablica numericArray zawiera cyfrę 1');
console.log(numericArray.includes(1));

console.log('Czy tablica numericArray zawiera cyfrę 4');
console.log(numericArray.includes(4));

console.log('--------------------------------------------');

console.log('Tablica textArray po dodaniu wartości four');
textArray.push('four');
console.log(textArray);

console.log('--------------------------------------------');

console.log('Typ zmienner, która przechowuje tablicę');
console.log(typeof textArray);

console.log('--------------------------------------------');
console.log('Długość tablicy textArray');
console.log(textArray.length);

