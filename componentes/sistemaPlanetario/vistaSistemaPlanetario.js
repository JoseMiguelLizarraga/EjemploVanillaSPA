


export const vistaSistemaPlanetario = (variables, state) =>
{
    return `
    <h1> ${state.titulo} de la estrella <b class="estrella" atributo="nombre"></b> utilizando HTMLElement y Shadow Dom </h1>

    <table id="miTabla" border="2" width="50%">
        <thead> 
            <tr>
                <th>Planeta</th> 
                <th>Estrella principal</th> 
            </tr>      
        </thead>
        <tbody>
            ${state.listaPlanetas.map(item => 
                `
                <tr> 
                    <td> ${item.nombre} </td> 
                    <td> 
                        <input type="text" value="${variables.estrella.nombre}" name="nombre" atributo="nombre" class="estrella" /> 
                    </td>   
                <tr>
                `
            ).join("")}
        </tbody>
    </table>

    <br/><br/>

    Cambiar nombre de la estrella: <input type="text" name="nombre" atributo="nombre" class="estrella" /> <br/><br/>
    Cambiar Titulo: <input id="txt_cambiar_titulo" type="text" value="${state.titulo}" />
    `;
}