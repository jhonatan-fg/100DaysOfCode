class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion
        this.peso = peso;
        this.iniciada = false
        this.instalada = false
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true) {
            this.iniciada = true
            alert("app iniciada")
        }
    }
    cerrar (){
        if(this.iniciada == true && this.instalada == true) {
            this.iniciada = false
            aler("app cerrada")
        }
    }
    instalar(){
        if(this.instalada == false) {
            this.instalada = true
            alert("app instalada correctamente")
        }
    }
    desinstalar(){
        if(this.instalada == true) {
            this.instalada = false;
            alert("app desinstalada correctamente")
        }
    }
    appInfo(){
        return `
            descargas: <b>${this.descargas}</b><br>
            puntuacion: <b>${this.puntuacion}</b><br>
            peso: <b>${this.peso}</b><br>
        `
    }
}

app = new App("16000","4 estrellas","900mb")
app1 = new App("1600","5 estrellas","500mb")
app2 = new App("16000","4 estrellas","900mb")
app3 = new App("16000","4 estrellas","900mb")
app4 = new App("16000","4 estrellas","900mb")
app5 = new App("16000","4 estrellas","900mb")
app6 = new App("16000","4 estrellas","900mb")

document.write(`
    ${app.appInfo()} <br>
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
`)

