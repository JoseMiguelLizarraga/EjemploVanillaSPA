


export class CargaVista
{
    constructor()
    {
     
    }

    cargarHtml(rutaArchivo)
    {
        //var i = document.getElementsByTagName("include")[0];

        fetch(rutaArchivo).then(archivo => 
        {
            archivo.text().then(contenido => 
            {
                //console.log(contenido);
                //i.insertAdjacentHTML("afterend", contenido);
                //i.remove();
                document.getElementsByTagName("contenido-app")[0].innerHTML = contenido;
            });
        });
    }
}