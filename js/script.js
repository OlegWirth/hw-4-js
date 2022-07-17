
//111111111111111111111111111111111111111
document.write(`-----1-------------------- </br>`);

let fruits = [1,2,3,4,5];

document.write(`${fruits} </br></br>`);

//22222222222222222222222222222222222
document.write(`-----2-------------------- </br>`);

let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(i = 0; i < arr.length; i++){
  if(arr[i] > -10 && arr[i] < -3){
    document.write(`${arr[i]} </br></br>`)
  }
}
  //333333333333333333333333333333333333
  document.write(`-----3------------------- </br></br>`);

  let arr1 = [];
  for(let i = 23; i < 57; i++){
      arr1[i] = i;
  }
document.write(`${arr1} </br>`);


let arr2 = [];
let n = [22];
while(n < [57]){
n++;
arr2[n] = n;
}
document.write(`${arr2} </br>`);


//444444444444444444444444444444444444444

let aar1 = ['10', '20', '30', '50', '235', '3000'];
let arrNumber  = [];
for(let i = 0; i < aar1.length; i++){
  arrNumber.push(parseInt(aar1[i]));
  if(arrNumber[1] || arrNumber[2] || arrNumber[5]){
    document.write(arrNumber);
  }
}
console.log(arrNumber);





  

















