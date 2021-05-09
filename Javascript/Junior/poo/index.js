class animal {
    constructor (especie, edad, color) {
        this.especie = especie
        this.edad = edad
        this.color = color
        this.informacion = `soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`
    }
    verInfo () {
        document.write(this.informacion + "<br>")
    }
}

let perro = new animal("perro","5 años","cafe")
let gato = new animal("gato","2 años","negro")
let pajaro = new animal("loro","1 año","verde")

perro.verInfo()
gato.verInfo()
pajaro.verInfo()

/*
document.write(perro.informacion)
console.log(perro.informacion)
*/
