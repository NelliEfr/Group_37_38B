// Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

function showEachLetter(str){
  for(let i = 0; i < str.length; i++){
    console.log(str[i])
  }
}

// showEachLetter('hello'); // h, e, l, l, o


// Дан массив с числовыми значениями

let numbers = [1, 5, 88, 4, -20, -4, 57];
let numbers_2 = [4, 50000, -4];

// Написать функцию, при вызове которой выводятся в консоль все элементы массива

function showEachElement(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
  }
}

// showEachElement(numbers);

// Написать функцию, при вызове которой выводятся в консоль все отрицательные элементы массива 

function showEachNegativeElement(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      console.log(arr[i])
    }
  }
}

// showEachNegativeElement(numbers);
// showEachNegativeElement(numbers_2);

// Написать функцию, при вызове которой выводится максимальное число из перечисленных
// let numbers = [1, 5, 88, 4, -20, -4, 57];

function showMaxNum(arr){
  let max = arr[0]; // 1

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i] // max = 5, max = 88
    }
  }

  console.log(max);
}

// Написать функцию, при вызове которой выводятся все четные положительные числа 

function func(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0 && arr[i] % 2 === 0){
      console.log(arr[i])
    }
  }
}

func(numbers);

