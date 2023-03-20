//Fill an array with 100 of the same object using the array fill method
const x  = 1;
const arr=Array(100);
arr.fill(x , 0 ,100);
console.log(arr);
//Create an array with numbers ranging from 1-100 using the Array.from method
const range = (start , stop , step) => Array.from({length:(stop - start)/ step + 1}
,(_,i) => start + i * step
);
console.log(range(0,100,1));
//Convert only values of an object into one array.
const person = {
    firstName: 'Hasan',
    lastName: 'Diab'
};
const arr3 = Object.entries(person);
console.log(arr3);
//Convert an array into one object.
const arr4=['I' , 'Am' , 'Learing' , 'React'];
const obj={};
arr4.forEach((elemnt , index)=>{
    obj[`key${index}`] = elemnt
});
console.log(obj);
//Find out if an array is an array.
var arr5 = [1, 2, 3, 4, 5];
typeof(arr5);
console.log(Array.isArray(arr5));
// //Copy an array.
// ● Create a copy of an array that won’t affect the
// original array if modified.
// ● Create a copy of an array that will affect the original
// array if modified.
const arr6=['Hasan','Diab','Tayar'];
const copy_arr6=[...arr6];
const fake_arr6=arr6;
console.log(arr6 == copy_arr6);
console.log(fake_arr6 == arr6);