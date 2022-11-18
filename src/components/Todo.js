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
   const[newTitle, setTitle]=React.useState(todo.title);
   
   return(
    <div className="todo">
    <input
    style={{textDecoration:todo.completed &&"line-through"}}
    type="text"
    value={todo.title === "" ? newTitle : todo.title}//если заголовок пуст он покажет новый заголовок 
    />
    </div>
   )
}