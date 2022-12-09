// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function removeFirstCat(){
    return cats.slice(1);
}
function removeLastCat(){
   return cats.slice(0,-1)
}
function prependCat(name){
   return [name, ...cats];
}
function appendCat(name){
    return [...cats, name];
}
console.log(removeFirstCat());
