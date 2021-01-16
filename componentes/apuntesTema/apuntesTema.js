import { CargaVista } from '../cargaVista.js';
import {Vista} from './vista.js';

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
        //============================================================================================>>>>> probando

        this.cargarHtml("componentes/apuntesTema/index.html");
        /*   
        var i = document.getElementsByTagName("include")[0];
        let rutaArchivo = "componentes/apuntesTema/index.html";

        fetch(rutaArchivo).then(archivo => 
        {
            archivo.text().then(contenido => 
            {
                console.log(contenido);
                i.insertAdjacentHTML('afterend', contenido);
                i.remove();
            });
        });
        */
        
        //============================================================================================>>>>> probando

        return new Vista().mostrar();
  
        //return `<h1>ApuntesTema</h1>`;


        // fetch("http://localhost/AAA/probandoSPA/componentes/ApuntesTema/index.html")
        // .then(res => {
        //     return res.text();
        // })
        // .then(html => {
        //     console.log("" + html);
        //     return "" + html;
        // });


    }
};

