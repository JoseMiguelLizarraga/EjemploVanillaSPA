import { CargaVista } from '../cargaVista.js';
//import {Vista} from './vista.js';

var operacion = ""; 

export class ApuntesTema extends CargaVista
{
    //nombre = "";

    constructor()
    {
        super();
        //this.nombre = "Leonardo Lima";

        //alert("ApuntesTema");
        Object.getOwnPropertyNames(ApuntesTema.prototype).forEach(c=> { window[c] = this[c]; });  // Coloca los metodos y variables para que esten disponibles desde el html
        this.cargarVista();
    }

    destructor() {
        //alert("destructor ApuntesTema");
        Object.getOwnPropertyNames(ApuntesTema.prototype).forEach(c=> { window[c] = null; });  // Remueve los metodos y variables para que no queden en memoria
    }

    probando() {
        alert("hola desde la clase ApuntesTema");
    }
    
    cargarVista()
    {
        this.cargarHtml("componentes/apuntesTema/index.html");        
        //return new Vista().mostrar(); 
        //return `<h1>ApuntesTema</h1>`;
    }
};

