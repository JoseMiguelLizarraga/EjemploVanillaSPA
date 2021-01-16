

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

    cargarHtml(json = {})
    {
        let etiquetaContenido = document.getElementsByTagName("contenido-app")[0];

        mostrarLoadingSpinner();

        if (json.rutaArchivo != null) 
        {
            fetch(json.rutaArchivo).then(archivo => 
            {
                archivo.text().then(contenido => 
                {
                    etiquetaContenido.innerHTML = contenido;
                });
            })
            .finally(c=> {
                ocultarLoadingSpinner();
            });
        }
        if (json.textoHtml != null) 
        {
            etiquetaContenido.innerHTML = json.textoHtml;
            ocultarLoadingSpinner();
        }

    }
    
}