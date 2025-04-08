//1
const saludar = require('./src/modules/saludar.js')
console.log(saludar(' Tiago ' + 'Castera'))

//2
const { sumar, restar, multiplicar, dividir, PI } = require('./src/modules/matematica');
console.log(`PI: ${PI}`);
console.log(`Sumar: ${sumar(10)}`);
console.log(`Restar: ${restar(10)}`);
console.log(`Multiplicar: ${multiplicar(10)}`);
console.log(`Dividir: ${dividir(10)}`);

//3
const Alumno = require('./src/modules/alumno.js');

const alumno1 = new Alumno("48245701", "tiagoghel");
console.log(alumno1);
//4
const copiar = () => require('./src/modules/fs');

copiar("./entrada.txt", "./salida.txt")

//5
const parsearUrl = require('./src/modules/url');
let direccion = parsearUrl("https://www.independientestore.com.ar/");

console.log("URL:",direccion);

//6
const parsearUrll = require('./src/modules/url');
let direccionn = parsearUrll("https://www.independientestore.com.ar/");

console.log("URL:",direccionn);

//7
const obtenerMoneda = require('./src/modules/moneda');
const alumno = require('./src/modules/alumno');

let moneda = obtenerMoneda("AR"); 
console.log(moneda);