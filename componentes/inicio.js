import { CargaVista } from "./cargaVista.js";

export class Inicio extends CargaVista
{

    constructor()
    {
        super();
        //alert("Inicio");
        this.cargarVista();
    }

    destructor() {
        //alert("destructor Inicio");
        //Object.getOwnPropertyNames(Inicio.prototype).forEach(c=> { window[c] = null; });  // Remueve los metodos y variables para que no queden en memoria
    }

    cargarVista()
    {
        let texto = `
        <h1> Hola desde la clase que está en componentes/inicio.js </h1>
        `;

        this.cargarHtml({textoHtml: texto});

        //document.getElementsByTagName("contenido-app")[0].innerHTML = `<h1>Inicio</h1>`;
        //return `<h1>Inicio</h1>`;
    }
    
};

