
function preguntarNombre() {

  //declaro una variable que almacena el nombre que el usuario escribe en el prompt
  let nombre = prompt('Ingrese su nombre:');

  //en el método alert ponemos por parámetro la variable nombre
  alert(nombre);

  //por último mostramos por consola el valor de la variable nombre
  console.log(nombre);
}

function noHaceNada() {
  var hola = 'Bienvenido a Js';
  let numero = 10000;
  const PI = 3.1416;
  alert(nombre2);
  alert(PI);
  PI = 3.11;
  alert(PI);
}

function tipoDatos() {
  let cadena = 'Texto de Ejemplo';
  let numero = 3.1541;
  let esMayor = false;
  let persona = {
    nombre: 'James',
    apellido: 'Gosling',
    edad: 33
  }

  console.log(persona);

}

function may() {

  //crear variable que aloje el texto del párrafo dónde se extraen los datos
  let texto = document.getElementById("struno").innerHTML;
  console.log(texto.toLowerCase());

}

function contar() {
  let contar = document.getElementById("struno").innerHTML;
  console.log(contar.length);
}

function repetir() {
  let texto = document.getElementById("struno").innerHTML;
  console.log(texto.repeat(3));
}

function reemplazar() {
  let texto = document.getElementById("struno").innerHTML;
  console.log(texto.replace("blablabla","Lorem"));
}

function parint() {

  let texto = "15a";
  console.log( parseInt(texto) + 15 );

}

function parFloat() {
  let numero = "3.1416";
  console.log( parseFloat(numero) + 15 );
}

function numb() {
  let bool = false;
  let nro = "10";
  console.log(Number(bool));
}

function oper() {
  let nro1 = 20;
  let nro2 = 8;

  let total = nro1 + nro2;
  console.log("La suma de los dos nros es : " + total);

  total = nro1 - nro2;
  console.log("La resta de los dos nros es : " + total);

  total = nro1 * nro2;
  console.log("La multiplicación de los dos nros es : " + total);

  total = nro1 / nro2;
  console.log("La división de los dos nros es : " + total);

  total = nro1 % nro2;
  console.log("El resto/módulo de la división de los dos nros es : " + total);
}


