
/*1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти 
элементы на экран.*/

let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i ++){
    document.write(arr[i]);
}

/*2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут 
быть положительными и отрицательными. Выведите на экран только отрицательные 
числа, которые больше -10, но меньше -3.*/

let arr_2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i =0; i < arr_2.length; i ++){
    if(arr_2[i] > -10 && arr_2[i]  < -3){
        document.write(`${arr_2[i]}  </br>`);
    }
}
/*3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и 
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого 
массива. Запишите ее в переменную result и выведите.*/

let arr_3 = [];
let summ_3 = 0;
for(let i = 23; i <=57; i ++){
    arr_3.push(i);
    summ_3 += i;
}
document.write(`${arr_3} </br>`);
document.write(`Summa: ${summ_3} </br>`); 


let arr_33_while = [];
let j = 23;
while(j <= 57){
arr_33_while.push(j);
j ++;
}
document.write(`${arr_33_while} </br>`);


/*4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. 
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 
5.
*/
 let arr_4 = ['10', '20', '30', '50', '235', '3000'];
 for(let i = 0; i < arr_4.length; i ++){
    if(arr_4[i][1] || arr_4[i][2] || arr_4[i][5]){
        console.log(arr_4[i]);
    }
 }


 /*5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все 
дни недели, а выходные дни выведите жирным
*/
let arr_5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for(let i = 0; i < arr_5.length; i ++){
    if(arr_5[i] === 'СБ' || arr_5[i] === 'ВС'){
        document.write(`<span style='font-weight:bold;'> ${arr_5[i]} </span> `);
    }else{
        document.write(`<span>${arr_5 [i]}</span>`);
    }
}

/* 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, 
 и получите последний элемент массива, используя свойство length.
*/ 
console.log('----666666666');
let arr_6 = ['111','222','333'];
arr_6.push('ADDed');
console.log(arr_6);
console.log(arr_6[arr_6.length-1]);

/*8. Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек:

    
  ***
  *****
 *******
*********

Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
цию, но которая выведет перевернутый треугольник.*/


const createP = function(height){
    for(let i = 1; i <= height; i++){

        for(let k = 1; k <= height-i;k ++ ){
            document.write('&ensp;');
        }

        for(let j = 1; j <= i+i-1; j++){
            document.write('*');
        }
        document.write('<br>');
    }
}

createP(25);

-------------------------------------------
    const createPRevert = function(height){
    for(let i = height; i >= 1; i--){

        for(let k = 1; k <= height-i;k ++ ){
            document.write('&ensp;');
        }

        for(let j = 1; j <= i+i-1; j++){
            document.write('*');
        }
        document.write('<br>');
    }
}

createPRevert(25);



  

















