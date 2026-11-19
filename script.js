// 
// Miguel Angel Escudero Gonzalez
// Grupo 1 
// Problema A : Aportes a seguridad social de un contratista por Orden de Prestación de Servicios (OPS)
//
let salarioMinimo = 1750000

// Ibc

let ibcPorcentaje = 40 //%
    let saludPorcentaje = 12.5 //%
    let pensionPorcentaje = 16 //%

let nivelsRiesgo = ""
    let nivel1Porcentaje = 0.522 //%
    let nivel2Porcentaje = 1.044 //%
    let nivel3Porcentaje = 2.436 //%

//Honorarios 

let honorarios = Number(prompt("dame el valor mensual del Contrato porfis"));

if (honorarios > 0) {
    alert("Guai ganas el minimo o mas")
}   
else if (honorarios < salarioMinimo); {
    alert("Error")
    }
