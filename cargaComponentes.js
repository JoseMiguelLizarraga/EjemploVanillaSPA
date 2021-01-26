

    import {rutasProyecto} from './configuraciones/rutasProyecto.js';

    var componente = null;
    var extiende_de_HTMLElement = false;

    const inicializarComponente = (elemento) => 
    {
        try {
            if (elemento.extendsHTMLElement != null && elemento.extendsHTMLElement == true)  // Si es un componente nativo
            {
                //console.log(elemento);
                window.customElements.define("contenido-app", elemento.componente);
                extiende_de_HTMLElement = true;
            }
            else {
                componente = new elemento.componente();
                //var html = componente.cargarVista();
            }
        } 
        catch (error) {
            console.log(error);
        }
    }

    //=============================================================================>>>>>
    // Al cargar el documento

    var nombre = window.location.href.split("/").reverse()[0];       // "apuntesTema"
    if (nombre.includes("#")) { nombre = nombre.replace("#", ""); }  // Remueve el # en caso de que lo tenga

    if (rutasProyecto.some(c=> c.nombre == nombre)) 
    {
        var rutaUrl = rutasProyecto.find(c=> c.nombre == nombre);
        inicializarComponente(rutaUrl);
    }
    else 
    {
        if (rutasProyecto.some(c=> c.default == true)) {
            var rutaPorDefecto = rutasProyecto.find(c=> c.default == true);
            inicializarComponente(rutaPorDefecto);
        }
        else {
            window.location.href = "404.html";
        }
    }

    //=============================================================================>>>>>

    Array.from(document.getElementsByTagName("a")).forEach(c=> 
    {
        c.addEventListener("click", (e) => 
        { 
            e.preventDefault();

            if (componente != null && window.destructor != null && typeof window.destructor == "function") {
                componente.destructor();
                //componente.probando();
            }

            var nombre = e.target.getAttribute("link");

            //var urlBaseProyecto = window.location.origin + window.location.pathname;   // "http://localhost/miProyecto/"
            //history.pushState({}, null, `${urlBaseProyecto}?${nombre}`);               // Cambia la url que ve el usuario. Ej:   "http://localhost/AAA/probandoSPA/?apuntesTema"
            history.replaceState({}, "", nombre);

            if (nombre.includes("#")) { nombre = nombre.replace("#", ""); }  // Remueve el # en caso de que lo tenga

            var rutaEncontrada = rutasProyecto.find(c=> c.nombre == nombre);

            if (rutaEncontrada != null) 
            {
                if (extiende_de_HTMLElement) {
                    return window.location.reload();   // Recarga la pagina, ya que si no lo hace genera problemas
                }

                inicializarComponente(rutaEncontrada);
            }
        });
    });