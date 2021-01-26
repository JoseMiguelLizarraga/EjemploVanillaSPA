
import { vistaSistemaPlanetario } from "./vistaSistemaPlanetario.js";


export class SistemaPlanetario extends HTMLElement
{
    constructor() 
    {
        super();
        this.attachShadow({ mode: "open" });

        this.variables = {
            estrella: {nombre: "Sol"}
        }

        this.state = { 
            titulo: "Sistema planetario",
            listaPlanetas: []
        };
    }

    static get observedAttributes() { return ["cargando", "state"]; }

    get cargando() { return JSON.parse(this.getAttribute("cargando")); }
    set cargando(valor) { this.setAttribute("cargando", JSON.stringify(valor)); }

    get state() { return JSON.parse(this.getAttribute("state")); }
    set state(valor) { this.setAttribute("state", JSON.stringify(valor)); }


    async connectedCallback()  // Esto es llamado cuando el elemento está conectado a la página
    {
        await this.obtenerListaPlanetas();
    }

    async obtenerListaPlanetas() 
    {
        this.cargando = true;
        const response = await fetch("componentes/sistemaPlanetario/planetas.json");
        const json = await response.json();

        var estado = this.state;
        estado.listaPlanetas = json;
        this.state = estado;

        this.cargando = false;
    }
 
    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }

    asignarEventos()
    {
        let ventana = this.shadowRoot;
        //let ventana = document;

        for (var atributo in this.variables.estrella)  // Recorre los atributos de la estrella
        { 
            Array.from(ventana.querySelectorAll(".estrella")).filter(c=> c.getAttribute("atributo") == atributo).forEach(c=> 
            {
                c.innerHTML = this.variables.estrella[atributo];   // Coloca el texto en los parrafos, h1, etc
                c.value = this.variables.estrella[atributo];       // Coloca el texto en los inputs
    
                c.addEventListener("keyup", (evento) => 
                { 
                    this.variables.estrella[atributo] = evento.target.value;

                    Array.from(ventana.querySelectorAll(".estrella")).filter(c=> c.getAttribute("atributo") == atributo).forEach(c=> 
                    {
                        c.innerHTML = this.variables.estrella[atributo];   // Coloca el texto en los parrafos, h1, etc
                        c.value = this.variables.estrella[atributo];       // Coloca el texto en los inputs
                    });
                });
                
            });
        }  

        ventana.querySelector("#txt_cambiar_titulo").addEventListener("keyup", (evento) => 
        { 
            var estado = this.state;
            estado.titulo = evento.target.value;
            this.state = estado;
        });

    }

    render()
    {
        if (this.cargando) {
            //this.innerHTML = "Cargando ...";
            this.shadowRoot.innerHTML = `Cargando ...`;
        } 
        else 
        {
            //this.innerHTML = vistaSistemaPlanetario(this.variables, this.state);
            this.shadowRoot.innerHTML = vistaSistemaPlanetario(this.variables, this.state);
            this.asignarEventos();

            /*
            fetch("vistaSistemaPlanetario.html").then(response => 
            {
                if (! response.ok) { throw new Error("Error al cargar la vista"); }
                return response.text();
            })
            .then(contenido => {
                this.innerHTML = contenido;
                this.cargarElementosHtml();
            });
            */
        }
    }
}