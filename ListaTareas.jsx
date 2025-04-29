
import Tarea from "./Tarea";
function ListaTareas({tareas,eliminarTarea,chequearTarea})
{
return(
<ul>
    {tareas.map(tarea=>
        (<Tarea
            key={tarea.id}
            tarea={tarea}
            eliminarTarea={eliminarTarea}
            chequearTarea={chequearTarea}
        >

        </Tarea>

        )
    )
    
    
    }
</ul>
);

}
export default ListaTareas;