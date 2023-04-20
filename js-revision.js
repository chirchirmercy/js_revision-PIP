

//Q1.Return the number of vowels in a string
//Create a function that’ll return an integer of the number of vowels found in a string.
// This is a great way to practice determining the features of a dataset. 
//If you use JavaScript later in your career, you’ll be well-prepared to determine what
// datasets (or just strings) consist of. If you feel like an extra challenge,
// consider returning the number of characters.


function vowels(str){
    let count=0;
    for(let i of str){
        if(vowel.includes(i)){
            count++
        }
    }
    return count
}
let str = "succeed"
let vowel = ["a","e","i","o","u"]
console.log(vowels(str))


//Q2.print all even numbers between 1-10

for(let i=0;i<=10;i++){
    if(i%2===0){
        console.log( i+ " is an even")
    }else{
        console.log(i+"is not an even")
    }
}


//2. Print a table containing multiplication tables
//Let’s start with the tables that many of us had to memorize in school.
// Can you print a table that contains all the answers to the multiplication tables from 1
// through 10? Like Challenge #1, can you create an efficient solution 
//that you could easily expand should you need the 12 times table?
function multiplicationTable(){
    const num = 4
    for(let i=1; i<=12;i++){
        const result = i*num
        console.log(result)
    }

}

multiplicationTable()



//3. Create a length converter function(km-miles)
//Creating a function is a skill that’ll be useful in many settings, and as you progress, 
//you’ll be working on much more complicated functions than this one. But a function that converts units 
//of measure can be pretty handy in multiple professions 
//and industries. Let’s start with a conversion from kilometers to miles. 
//The function should include the input in kilometers and return the answer in miles.


function converter(length){
    return length* 0.621371
}

let length=50
console.log(converter(length))





//5. Create a function that reverses an array
//This challenge is particularly helpful if you’re planning to become a Data Scientist.
// Manipulating data is a significant part of the role, and building the foundations 
//now will help you later down the road when you’re working with large databases. 
//Start small here and work your way up. Begin with an array of 5 numbers,
// and then try your program with a larger array to verify its success.


let numbers=[10,20,30,70,15]
function nums(numbers){
    return numbers.reverse()
}
console.log(nums(numbers))




