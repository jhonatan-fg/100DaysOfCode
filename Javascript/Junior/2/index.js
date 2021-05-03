
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

function saludar(){
    respuesta = prompt("!hola dany! como fue tu dia?")
    if (respuesta == "bien") {
        alert("me alegro")
    } else {
        alert("una pena")
    }

saludar()
}

