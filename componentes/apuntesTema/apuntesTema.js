import { CargaVista } from '../cargaVista.js';
//import {Vista} from './vista.js';

var operacion = ""; 

export class ApuntesTema extends CargaVista
{
    //nombre = "";

    constructor()
    {
        super();
 
        for (var prop in this) { window[prop] = this[prop]; }                                          // Coloca los atributos de la clase para que esten disponibles desde el html
        Object.getOwnPropertyNames(this.constructor.prototype).forEach(c=> { window[c] = this[c]; });  // Coloca los metodos de la clase para que esten disponibles desde el html
        
        this.cargarVista();
    }

    destructor() {
        //alert("destructor ApuntesTema");
        for (var prop in this) { delete window[prop]; }                                             // Remueve los atributos de la clase para que no queden en la ventana
        Object.getOwnPropertyNames(this.constructor.prototype).forEach(c=> { delete window[c]; });  // Remueve los metodos de la clase para que no queden en la ventana
    }

    probando() {
        alert("hola desde la clase ApuntesTema");
    }
    
    cargarVista()
    {
        this.cargarHtml({ rutaArchivo: "apuntesTema/index.html" });       
    }
};

