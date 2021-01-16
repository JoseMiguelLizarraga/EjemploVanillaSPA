
export class Inicio
{

    constructor()
    {
        //alert("Inicio");
    }

    destructor() {
        //alert("destructor Inicio");
        Object.getOwnPropertyNames(Inicio.prototype).forEach(c=> { window[c] = null; });  // Remueve los metodos y variables para que no queden en memoria
    }

    cargarVista()
    {
        document.getElementsByTagName("contenido-app")[0].innerHTML = `<h1>Inicio</h1>`;
        //return `<h1>Inicio</h1>`;
    }
    
};

