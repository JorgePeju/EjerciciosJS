    var n = 9;
    var n2 = 9;
    console.log(n == n2); // Devuelve true porque son iguales los contenidos de las variables
    var n3 = 109;
    console.log(n == n3); // Devuelve false porque no son iguales los contenidos de las variables
    var n4 = '9';
    console.log(n == n4);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos
    var n5 = 9.0;
    console.log(n == n5);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos

    var n = 9;
    var n2 = 9;
    console.log(n === n2); // Devuelve true porque son iguales los contenidos de las variables y los tipos
    var n3 = 109;
    console.log(n === n3); // Devuelve false porque no son iguales los contenidos de las variables
    var n4 = '9';
    console.log(n === n4);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
    var n5 = 9.0;
    console.log(n === n5);// Devuelve true porque son iguales los contenidos de las variables y los tipos