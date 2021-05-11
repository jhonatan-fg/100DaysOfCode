class Animal {
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

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = null
    }
    set setRaza(newName){
        this.raza = newName
    }    
    get getRaza(){
        return this.raza
    }
}


const perro = new Perro("perro","5 años","cafe","doberman")
const gato = new Animal("gato","2 años","negro")
const pajaro = new Animal("loro","1 año","verde")

perro.setRaza = "pedro"

document.write(perro.getRaza)


/*
perro.ladrar()
gato.verInfo()
pajaro.verInfo()


document.write(perro.informacion)
console.log(perro.informacion)
*/
