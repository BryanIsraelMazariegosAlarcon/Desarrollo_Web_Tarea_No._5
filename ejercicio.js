const desarrollo_web = 
{
alumnos:[{nombre:"Juan",nota:10},{nombre:"Maria",nota:30},{nombre:"Carlos",nota:20},{nombre:"Karla",nota:40}]
}

const programacion_2= 
{
alumnos:[{nombre:"Lili",nota:30},{nombre:"Cleo",nota:40},{nombre:"Pedro",nota:33},{nombre:"Marco",nota:21}]
}

function listar_alumnos(curso)
{
    var html1 = "";
    var html2 = "";


    const div1 = document.getElementById("desarrollo_web");
    const div2 = document.getElementById("programacion_2");
    
    if(curso == "desarrollo")
    {
        const {alumnos} = desarrollo_web;
        for(let x = 0; x<=3; x++)
        {
            if(alumnos[x].nota <= 10)
            {
            html1 += `<li class="rojo">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }

            if(alumnos[x].nota <= 20 && alumnos[x].nota >10)
            {
            html1 += `<li class="verde">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }

            if(alumnos[x].nota >= 21)
            {
            html1 += `<li class="azul">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }
        }
        var lista = `<ol> ${html1} </ol>`;
        div1.innerHTML = lista;
    }

    if(curso == "programacion")
    {    
        const {alumnos} = programacion_2;
        for(let x = 0; x<=3; x++)
        {
            if(alumnos[x].nota <= 10)
            {
            html2 += `<li class="rojo">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }

            if(alumnos[x].nota <= 20 && alumnos[x].nota >10)
            {
            html2 += `<li class="verde">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }

            if(alumnos[x].nota >= 21)
            {
            html2 += `<li class="azul">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }
        }
        var lista = `<ol> ${html2} </ol>`;
        div2.innerHTML = lista;
    }

}

listar_alumnos("desarrollo");
listar_alumnos("programacion");

/* Fin Notas Alumnos */



/* Inicio Calculadora */

var tabla = () => 
{
    var caja = document.getElementById("calculadora");
    var numero = parseFloat(document.getElementById("num").value);
    var operacion = document.getElementById("tipo_operacion").value;
    var html = "";

    if(operacion=="suma")
    {
        for(let i=1; i<6; i++)
        {
            html += `<p> ${numero} + ${i} = ${numero+i} </p>`
        }
    }
    if(operacion=="resta")
    {
        
    }
    if(operacion=="multiplicacion")
    {
        
    }
    if(operacion=="division")
    {
        
    }


}

/* Fin Calculadora */





