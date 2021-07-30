//Scope es el alcanze que tienen las variables que declaramos
//Esta es una variable en el scope global por que la puedo utilizar en cualquier parte del codigo
//Y su caracteristica es que no esta dentro de alguna funcion
var hello = "Hello";

// Con let no se puede volver a asignar el valor.
let world = "Hello World";
const helloworld = "Hello World!!!";
console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = "I am global";
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = "I am global Var";
}

anotherFunction();
console.log(globalVar);