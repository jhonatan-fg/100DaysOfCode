class Celular {
    constructor(color,peso,tamaño,rdc,ram) {
        this.color = color
        this.peso = peso
        this.tamaño = tamaño
        this.rdc = rdc
        this.ram = ram
        this.encendido = false
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("celular encendido")
            this.encendido = true
        } else {
            alert("celular apagao")
            this.encendido = false
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciado celular")
    } else {
        alert("el celular esta apagado")
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.rdc}`)
    }
    grabarVideo(){
        alert(`grabando video en: ${this.rdc}`)
    }
    mobileInfo(){
        return `
            color: <b>${this.color}</b><br>
            peso: <b>${this.peso}</b><br>
            resolucion de pantalla: <b>${this.tamaño}</b><br>
            resolucion de video: <b>${this.rdc}</b><br>
            memoria ram: <b>${this.ram}</b><br>
        `
    }

}

class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram)
        this.resolucionDeCamaraExtra = rdce
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta")
    }
    reconocimientoFacial(){
        alert("vamos a iniciar reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra: ${this.rdc}`
    }
}

/*
celular1 = new Celular("negro","150 gramos","5'","hd","2GB")
celular2 = new Celular("gris","160 gramos","5.5'","full hd","3GB")
celular3 = new Celular("azul","190 gramos","6'","full hd","4GB")
*/

celular1 = new CelularAltaGama("rojo","130g","5.5","4k","4GB","hd")
celular2 = new CelularAltaGama("negro","142g","6","4k","6GB","full hd")

document.write(`
    ${celular1.infoAltaGama()} <br><br>
    ${celular2.infoAltaGama()} <br>
`)

/*
celular1.presionarBotonEncendido()
celular1.tomarFoto();
celular1.grabarVideo()
celular1.reiniciar()
celular1.presionarBotonEncendido()
*/
