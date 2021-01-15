import {Vista} from './vista.js';

var operacion = ""; 

export class ApuntesTema
{
    //nombre = "";

    constructor()
    {
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

