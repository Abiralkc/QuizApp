// We will work on bank account data

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// using for of loop
for (const mov of movements) {
  // for (const [i, mov] of movements.entries())
  // counter variable in for of loop
  if (mov > 0) {
    console.log(`You deosited ${mov}`);
  } else {
    console.log(`You withdrew ${mov}`)
  }
}

// same thing with for each (easier way)
console.log('---Using For Each---');
movements.forEach(function(mov){
  // forEach call this call back function
  // forEach method is higher order function
  if (mov > 0) {
    console.log(`You deosited ${mov}`);
  } else {
    console.log(`You withdrew ${mov}`)
  }
}); 

console.log('---Counter Variable---');
// for of 
  for (const [i, mov] of movements.entries()) {
  // counter variable in for of loop
  if (mov > 0) {
    console.log(`Movement of ${i + 1}: You deosited ${mov}`);
  } else {
    console.log(`Movement of ${i + 1}: You withdrew ${mov}`)
  }
}

console.log('---Counter Variable using forEach---');
console.log('---Using For Each---');
movements.forEach(function(mov, i, arr){
  // order of parameter is important
  if (mov > 0) {
      console.log(`Movement of ${i + 1}: You deosited ${mov}`);
    } else {
      console.log(`Movement of ${i + 1}: You withdrew ${mov}`)
    }
}); 

// note the order of parameter in for off and for each