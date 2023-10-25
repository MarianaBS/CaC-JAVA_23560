
function borrar(){

    document.getElementById("modificar").innerHTML='Total a Pagar: $'
}
function calcular(){
    let resultado=0;
    let categoria= document.getElementById("categoria").value;
    let cantidad = document.getElementById("cant").value;
    switch(categoria){
        case "1":
            resultado=200*0.5*parseInt(cantidad);
            break;
        case "2":
            resultado=200*0.3*parseInt(cantidad);
            break;
        case "3":
            resultado=200*0.8*parseInt(cantidad);
            break;
        default:
            resultado=200 *parseInt(cantidad);
            break;
    }
    console.log(cantidad);
    console.log(categoria);
    console.log(resultado);
    document.getElementById("modificar").innerText='Total a Pagar: $' + resultado ;
}
