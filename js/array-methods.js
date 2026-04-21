// Array Methods 1

// Length.

const fruits = ["apple", "kiwi", "durian", "mango", "orange"];
console.log(fruits.length);

// Using length,can you write a loop to output all the fruits?
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Addition,Subtraction,Add in the middle,Take from the middle
// Push,Pop,Shift,Unshift

fruits.push("banana")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.unshift("pineapple")
console.log(fruits)
fruits.shift()
console.log(fruits)

// Splice,Slice

// Remove the second element
// .splice(index,how many)
fruits.splice(1,1)
console.log(fruits)

// Add an element in the middle
// .splice(index,0,'item')
fruits.splice(1,0,'passion fruit')
console.log(fruits)

// You can also remove and add at the same time
// fruits.splice(1,1,'passion fruit')

// Sample Replace
fruits.splice(1,1,"dragon fruit")
console.log(fruits)

// Slice
// .slice(start,end)
console.log(fruits.slice(0,3))

const firstThree=fruits.slice(0,3)
console.log(firstThree)

// Get the last few elements
// .slice(number of elements to remove)不要前面几个，就写几个
console.log(fruits.slice(2))