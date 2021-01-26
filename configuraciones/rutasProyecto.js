
import { ApuntesTema } from "../componentes/apuntesTema/apuntesTema.js";
import { Inicio } from "../componentes/inicio.js";
import { SistemaPlanetario } from "../componentes/sistemaPlanetario/sistemaPlanetario.js";


export const rutasProyecto = [
    {nombre: "home", componente: Inicio, default: true},
    {nombre: "apuntesTema", componente: ApuntesTema},
    {nombre: "sistemaPlanetario", componente: SistemaPlanetario, extendsHTMLElement: true}
];



