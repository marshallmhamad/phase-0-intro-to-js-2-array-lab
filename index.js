// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]



function destructivelyAppendCat(name){
    cats.push(name)
}
 function destructivelyPrependCat(name){
    cats.unshift(name)
 }

 function destructivelyRemoveLastCat(){
    cats.pop()
 }

 function destructivelyRemoveFirstCat(){
    cats.shift()
 }

 function appendCat(name){
   let allcats = [...cats, name]
   return allcats

 }

 function prependCat(name){
    let allcats = [name, ...cats]
    return allcats
 }

 function removeLastCat(){

    let me = cats.slice(0,cats.length-1)

    return me

 }

 function  removeFirstCat(){
    let me = cats.slice(1)
    return me
 }