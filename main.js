// this is my JS comment

/* multi-line comment
see how it is not highlighted */

// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');
// var fullName = firstName + ' ' + lastName;
//
// var age = prompt('What is your age?');
// age = parseInt(age);
//
// if(age > 20) {
//   console.log('You can drink booze...legally');
// } else {
//   console.log('You are too young to drink...legally');
// }
//
//
// if(age >= 0 && age < 6){ //between 0 and 5
//   console.log('Movie: G');
// } else if(age >= 6 && age < 13){ //between 6 and 12
//   console.log('Movie: PG')
// } else if (age >= 13 && age < 18){ //between 13 and 18
//   console.log('Movie: PG-13');
// } else {
//   console.log('Movie: R');
// }

// var color = prompt('What is your favorite color?');
// color = color.toLowerCase();
// switch(color){
// case 'blue':
//   console.log('blue is awesome')
//   break;
// case 'red':
//     console.log('red is awesome')
//     break;
// case 'green':
//       console.log('green is awesome')
//       break;
// case 'yellow':
//   console.log('yellow is awesome');
// default:
//   console.log('you suck');
// }

// var number = prompt('Enter a number');
// number = number * 1;
// // if(number > 0 && number < 10){
// //   while(number < 50){
// //     console.log('Number : ' + number);
// //     number +=2;
// //   }
// // }
// for(var i = number; i < 50; i++){
//   console.log('I :' + i);
// }

// var colors = [];
//
// var response = prompt('Enter a color or (q)uit');
// response = response.toLowerCase();
// debugger;
// while(response !== 'q'){
//   colors.push(response);
//   console.log(colors);
//   response = prompt('Enter a color or (q)uit');
//   response = response.toLowerCase();
// }

// var evens = [],
//     odds = [];
//
// for(var i = 0; i < 100; i++){
//   var remainder = i % 2;
//
//   if(remainder === 0){ //even
//     var square = i * i;
//     evens.push(square);
//   } else { //odd
//     var cube = Math.pow(i, 3);
//     odds.push(cube);
//   }
// }
//
// console.log(evens);
// console.log(odds);


function square(x) {
  var y = x * x;
  return y;
}

square(4);

function cube(x) {
  return Math.pow(x,3)
}
