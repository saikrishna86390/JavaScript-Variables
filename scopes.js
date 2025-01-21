//GLOBAL SCOPE
let course = "javscript";

//FUNCTIONAL SCOPE;
//here what i understand is we assign function if i want output of the code first we call the fucntion then output wiil be comming without calling function console.log will not working
function detailsOfCorses() {
  let javaScript = "This is dynamic language";
  console.log(javaScript); //This is inline functional scope calling
  console.log(course); //This is global scope calling
}
detailsOfCorses();

//BLOCK SCOPE;
//In block scope what asign variables in block that data is not accessed outside block, that data will acceses only in block only but var data type is acccese outside of the block
if (true) {
  let car = "kia";
  const bike = "yamaha";
  var train = "simhapuri";
  console.log(car); //This is accessed
  console.log(bike); //This is accessed
  console.log(train); //This is accessed
}
// console.log(car);//This is not acessed
// console.log(bike);//This is not acessed
console.log(train); //This is accessed

console.log(course); // this global scope is acceses any ware in this program
