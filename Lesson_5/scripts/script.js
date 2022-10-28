// Написать цикл for, который выводит в консоль числа от 5 до 17;

// for(let i = 5; i < 18; i++) {
//   console.log(i)
// }



// Написать цикл for, который выводит в консоль числа от 10 до 25 с шагом 2;

// for(let i = 10; i <= 25; i += 2){
//   console.log(i)
// }



// Написать цикл for, который выводит в консоль числа от 100 до 25 кратные 3

// for(let i = 100; i > 24; i--){
//   if(i % 3 === 0){
//     console.log(i)
//   }
// }



// Задан массив. Вывести каждый элемент массива в консоль

// let arr = [3, 'hello', true, 9, 66, 'hhhh'];

// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }

// Дана строка. Вывести каждую букву в консоль

// let string = 'good morning!';

// for (let i = 0; i < string.length; i++){
//   console.log(string[i])
// }


// Дан массив с числами. Найти сумму всех чисел

let arr = [2, 54, 7, 98];

let sum = 0;
for (let i = 0; i < arr.length; i++){
  sum += arr[i]
}

// console.log(sum);

// Дан массив с числами. Найти произведение всех чисел

let arr2 = [3, 7, 25]; // 525

let mult = 1;
for (let i = 0; i < arr2.length; i++){
  mult *= arr2[i]
}

console.log(mult);
