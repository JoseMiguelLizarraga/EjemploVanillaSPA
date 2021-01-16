

import {mostrarLoadingSpinner, ocultarLoadingSpinner} from '../funciones/funcionesGenericas.js'

export class CargaVista
{
    constructor()
    {
        this.validarSesionUsuario();
    }

    validarSesionUsuario()
    {
        // if (localStorage.getItem("mi_token") == null) 
        // {
        //     throw "No ha iniciado sesión";
        // }
    }

    cargarHtml(rutaArchivo)
    {
        mostrarLoadingSpinner();
        
        fetch(rutaArchivo).then(archivo => 
        {
            archivo.text().then(contenido => 
            {
                document.getElementsByTagName("contenido-app")[0].innerHTML = contenido;
            });
        })
        .finally(c=> {
            ocultarLoadingSpinner();
        });
    }
    
}