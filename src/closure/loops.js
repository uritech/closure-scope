const anotherFunction = () =>{
    //Aqui si la variable la declaro como var me mostrara solo 10, no en forma creciente, si utilizo let es cuando
    //muestra del 0 al 9
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction();