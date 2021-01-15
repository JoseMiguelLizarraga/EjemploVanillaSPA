
import { ApuntesTema } from "./apuntesTema.js";


export class Vista extends ApuntesTema
{
    constructor() {
        super();  // Llama al constructor de la clase padre
    }

    mostrar() 
    {
        //this.probando();  // Llama a un metodo de la clase padre

        return `
            <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </h3>

            <button id="miBoton" type="button" onclick="probando()"> probando desde vista.js </button>
        `;
    }

 
};

