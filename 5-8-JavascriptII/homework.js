//En cada console.log debera colocar el valor que usted cree que tendra cada valor
x = 1;
let a = 5;
let b = 10;
let c = function (a, b, c) {
    let x = 10;
    console.log('X:', x); //
    console.log('A:', a); //
    var f = function (a, b, c) {
        b = a;
        console.log('B:', b); //
        b = c;
        var x = 5;
    };
    f(a, b, c);
    console.log('B:', b); //
};
c(8, 9, 10);
console.log('B', b); //
console.log('X', x); //

let instructor = 'Tony';
if (true) {
    let instructor = 'Franco';
    console.log('Instructor:', instructor); //
}
console.log('Instructor:', instructor); //

let nombre = 'Mario';
if (true) {
    nombre = 'Jorge';
    console.log('Nombre:', nombre); //
}
console.log('Nombre:', nombre); //

console.log(6 / '3'); //
console.log('2' * '3'); //
console.log(4 + 5 + 'px'); //
console.log('$' + 4 + 5); //
console.log('4' - 2); //
console.log('4px' - 2); //
console.log(7 / 0); //
console.log({}[0]); //
console.log(parseInt('09')); //
console.log(5 && 2); //
console.log(2 && 5); //
console.log(5 || 0); //
console.log(0 || 5); //
console.log(3 > 2 > 1); //

//Objetos
//Declare un objeto que posea las siguientes propiedades, un nombre, apellido, edad, y direccion. Estas seran Juan, Rostolfo, 18, La Prida 123.

const obj = {};

//Crear una funcion que recibe 3 parametros, el primero sera un objeto, el segundo una clave y el tercero un valor, estos seran asignados al objeto y retornara el objeto

const agregarPropiedad = (a, b, c) => {};

//Se debera crear un constructor se utilizara para crear un objeto que posea nombre, stock, descripcion y precio en ese orden.
//Crear un metodo "getProduct" que devuelva un string con la forma 'El producto llamado "NOMBRE" tiene un stock de "STOCK" su descripcion es "DESCRIPCION" y tiene un precio unitario de $"PRECIO"'

function Producto() {}

//Clases
//Crearemos una clase Coche que debera tener las siguientes propiedades "nombre","marca" "cilindrada", "cantidadPuertas", "precio", "año".
//Se debera crear un metodo que muestre la instancia completa de la forma {nombre, cilindrada, "marca", cantidadPuertas, precio, año} llamado getCar
//Se debera crear un getter para cada uno de las propiedades, getName, getBrand, getDisplacement, getDoors, getPrice, getYear.
//Crearemos un metodo estatico que getDescription que devolvera el siguiente string "Esta clase se utiliza para crear un nuevo Coche, este poseera nombre, marca, cilindrada, cantidad de puertas, precio y año de creacion en este orden"
//Se debera crear un metodo que modifique el precio del vehiculo llamado editPrice

class Coche {}

//NO CAMBIAR NADA DE ACA EN ADELANTE
module.exports = { obj, agregarPropiedad, Producto, Coche };
