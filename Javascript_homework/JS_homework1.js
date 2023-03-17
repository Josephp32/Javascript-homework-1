//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    let find = "";
    for (let i of dog_names) {
        if (dog_string.toLowerCase().includes(i.toLowerCase())){
          find += i;
            return `Matched dog_name: ${find}`
        } else {
            return 'No matches.'
        }
    } console.log(find)
}

console.log(findWords())

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, 'even index')
        } 
    }
    return arr
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//code war

//1. Even or Odd
function evenOrOdd(number) {
    if (number % 2 === 0) {
      return("Even");
      }
      else {
      return("Odd");
    }
  }

//2. count the likes
var evalLikes = function(words){
    let likes=words.join(' ').match(/\blike\b/gi)
    return likes?likes.length/words.length>=0.05:false
  }

// 3. Sum Array
  function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

//4.count the digit
function nbDig(n, d) {
    var res=0;
        for (var g=0;g<=n;g++){
          var square=(g*g+"").split("");
          square.forEach((s)=>s==d?res++:null)
        }return res;
    }