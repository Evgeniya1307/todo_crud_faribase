//для задач
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit,
}) {
   const[newTitle, setNewTitle]=React.useState(todo.title);
   const handleChange=(e)=>{ //функция для обработки
e.preventDefault();
if(todo.complete === true){
    setNewTitle(todo.title);
}else {
  todo.title = "" ;
  setNewTitle(e.target.value)
}
   }
   
   return(
    <div className="todo">
    <input
    style={{textDecoration:todo.completed &&"line-through"}}
    type="text"
    value={todo.title === "" ? newTitle : todo.title}//если заголовок пуст он покажет новый заголовок 
    className="list"
    onChange={handleChange} //фу-ия для обработки
    />
    <div>
    <button
    className="button-complete"
    onClick={()=>toggleComplete(todo)}//переключения изменений изменит false на true и на наоборот
    >
    <CheckCircleIcon id ="i"/>
    </button>
    <button
    className="button-edit"
    onClick={()=>handleEdit (todo, newTitle)}
    >
    <EditIcon id ="i"/>
    </button>
    <button
    className="button-delete"
    onclick={()=>handleDelete (todo, id)}
    >
    <DeleteIcon id="i"/>
    </button>
    </div>
    </div>
   )
}