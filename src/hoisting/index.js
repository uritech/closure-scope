//El levantamiento de las declaraciones
//Al momento de compilar el sistema ordena nuestras variables para poder empezar a utilizar nuestra variable
//var a;
//a = 2;
// console.log(a);

a = 2;
var a;
console.log(a);

// El hoisting se genera en las declaraciones y no en la inicializacion
console.log(a);
var a = 2;

function nameOfDog (name){
    console.log(name);
}

nameOfDog("Molly");