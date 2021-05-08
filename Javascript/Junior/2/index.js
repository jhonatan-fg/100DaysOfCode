
/*frutas = ["banana","manzana","pera"]

document.write(frutas[0]+"<br>")

let numeroS = 0;

if (numeroS < 10) {
    numeroS++
    document.write(numeroS)
}

while (numeroS < 10) {
    numeroS++
    document.write(numeroS + "<br>")
}

do {
    document.write(numeroS + "<br>")
    numeroS++
}

while (numeroS < 10)


while (numeroS < 1000) {
    numeroS++
    document.write(numeroS)
    if (numeroS == 10) {
        break
    }
}


for (let i = 0; i < 20; i++) {
    if (i == 12) {
        continue;
    }
    document.write(i + "<br>")
}


let animales = ["gato","perro","tiranosaurio rex"]

for (animal in animales) {
    document.write(animal + "<br>")
}
    document.write("<br>")

for (animal of animales) {
    document.write(animal + "<br>")    
}



array1 = ["maria","josefa","roberta"]
array2 = ["pedro","marcelo",array1]


forprimero:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1){
            document.write(array + "<br>")
            break forprimero
        }
    } else {
        document.write(array2[array] + "<br>")
    }
}

*/

/*-----------------------FUNCIONES-------------------*/
/*
function saludar(){
    respuesta = prompt("!hola dany! como fue tu dia?")
    if (respuesta == "bien") {
        alert("me alegro")
    } else {
        alert("una pena")
    }
}

//saludar()

saludar1 = function(){
    respuesta = prompt("!hola dany1! como fue tu dia?")
    if (respuesta == "bien") {
        alert("me alegro")
    } else {
        alert("una pena")
    }
}

//saludar1()

function saludar(){
    //alert("hola")
    return "todo okay"
}

let saludo = saludar();

//document.write(saludo)

function suma(num1,num2){
    let res = num1 + num2;
    return res
}

let resultado = suma(12,32)
//document.write(resultado)

const saludarN = (nombre) => {
    let frase = `!hola ${nombre}! ¿como estas? `
    document.write(frase)
}

saludarN("jhony")
*/

/*
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿cual es tu edad?")
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis sos mayor de edad")
            free = true;
    } else {
        alert(`son las ${time}:00hrs podes pasar, pero tenes que pagar la entrada`) 
    }} else {
        alert("eres menor de edad")
    }
}


validarCliente(23)
validarCliente(24)
validarCliente(0.2)
validarCliente(0.6)
validarCliente(2)
validarCliente(2.4)
validarCliente(3)
*/

/*
let cantidad = prompt("cuantos alumnos son?")
let alumnosTotales = []

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0]
}

const tomarLista = (nombre,p)=>{
    let presencia = prompt(nombre)
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++
    }
}

for (i=0; i<30; i++) {
    for (alumno in alumnosTotales) {
        tomarLista(alumnosTotales[alumno][0],alumno)
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ______Presentes: ${alumnosTotales[alumno][1]}<br>
    ______Ausencias: ${30 - alumnosTotales[alumno][1]}
        `
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "<b style='color:red'>Reprobado por inasistencias</b><br><br>"
    } else {
    resultado+= "<br><br>"
    } document.write(resultado)
}
*/

const sumar = (num1,num2) => {
    return parseInt(num1) + parseInt(num2)
}
const restar = (num1,num2) => {
    return parseInt(num1) - parseInt(num2)
}
const dividir = (num1,num2) => {
    return parseInt(num1) / parseInt(num2)
}
const multiplicar = (num1,num2) => {
    return parseInt(num1) * parseInt(num2)
}

alert("que operacion deseas realizar?")
operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicaion")

if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar")
    let numero2 = prompt("segundo numero")
    resultado = sumar(numero1,numero2)
    alert(`tu resultado es ${resultado}`)
} else if (operacion == 2) {
    let numero1 = prompt("primer numero para restar")
    let numero2 = prompt("segundo numero para restar")
    resultado = restar(numero1,numero2)
    alert(`tu resultado es ${resultado}`)
} else if (operacion == 3) {
    let numero1 = prompt("primer numero para dividir")
    let numero2 = prompt("segundo numero para dividir")
    resultado = dividir(numero1,numero2)
    alert(`tu resultado es ${resultado}`)
} else if (operacion == 4) {
    let numero1 = prompt("primer numero para multiplicar")
    let numero2 = prompt("segundo numero para multiplicar")
    resultado = multiplicar(numero1,numero2)
    alert(`tu resultado es ${resultado}`)
} else {
    alert("operacion invalida")
}
