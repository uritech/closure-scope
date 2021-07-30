// Por medio de métodos podemos obtener y asignar el valor de una variable dentro de nuestro closure
//De esta forma sería una variable privada
const person = () =>{
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Uriel Barranco");
console.log(newPerson.getName());