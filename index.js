/*6. Write a recursive method that gives you all  numbers from 1 to 100*/







// if it is start from 100 //

/*function numbers(n){
   if(n == 100){

   return n;
   

}else {

 console.log(n)

}
 numbers(n+1)
 }*/

// if it is start from 1 //
/*function numbers(n){
   if(n == 0){

   return n;
   

}else {

 console.log(n)

}
 numbers(n - 1)
 }
*/

/*5. Write a method that gives you the sum of all numbers that are mulitpliers of 3 and 4 under 1000



for(let i=1; i<=1000; i++){
if(i % 3 === 0 ){
		console.log(i)

	}else if(i % 4 === 0 ){
		console.log(i)}
	                     }*/

/*
2. Write a function that takes an array as an argument and returns the array in reverse order e.g.
[2,3,4,5,6,7]  ----> [7, 6, 5, 4, 3, 2]

var array1 = [1,2,3,4,5,6];
console.log('array1: ', array1);


var reversed = array1.reverse(); 
console.log('reversed: ', reversed);



console.log('array1: ', array1);
*/


/*4. Write a method that takes the first array from the object and combines it into a string with the second array in the object. e.g. ---> 'abracadabra'

var obj = [
['a', 'b', 'r', 'a'],
{array: [ 'c', 'a', 'd', 'a', 'b', 'r', 'a']}

]



var arr1 = ['a', 'b', 'r', 'a'];
var arr2 = ['c', 'a', 'd', 'a', 'b', 'r', 'a'];
var final = arr1.concat(arr2);
*/

/*
3. Write a function that takes a string and returns an array of all consonant in this string; 
  

  function convertArray(array){
 var consonant =[];
 var convert = array.split('')
 console.log(convert)

 for(let i =0;i<convert.length;i++){
    if(convert[i] == 'b' || convert[i] == 'c' || covert[i] == "d" || covert[i] == "f" || covert[i] == "g" || convert[i] == 'h' || convert[i] == 'j' || covert[i] == "k" || covert[i] == "l" || covert[i] == "m" || convert[i] == 'n' || convert[i] == 'p' || covert[i] == "q" || covert[i] == "r" || covert[i] == "s" || convert[i] == 't' || convert[i] == 'v' || covert[i] == "w" || covert[i] == "x" || covert[i] == "y" || convert[i] == 'z' ||){
        
        consonant.push(convert[i])

    }
 }
 console.log(consonant)

}*/