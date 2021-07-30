//Esto es un closure, recuerda el valor de las variables que estan dentro del closure.
//Un closure lo asignamos a una variable para que guardelos valores
//Podemos crear cuantas variables que contengan nuestro closure como queramos y cada una será diferente
//guardara sus propios valores en su ámbito léxico
const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();