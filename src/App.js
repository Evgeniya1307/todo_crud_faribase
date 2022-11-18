import React from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import  "./App.css"
import Todo from "./components/Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";



function App (){
  const[todos, setTodos]= React.useState([]);

  //получаю данные 
React.useEffect(()=>{
const q= query(collection(db,"todos"));
const unsub= onSnapshot(q,(querySnapshot)=>{ //запрос
  let todosArray=[];//временный массив для задач
  querySnapshot.forEach((doc)=>{
    todosArray.push({...doc.data(), id:doc.id});//каждое действие помещаю во временный массив
  })
  setTodos(todosArray)
}) 
return()=> unsub()
},[]);

const handleEdit = async (todo, title)=>{ //обновила функцию редактирования
  await updateDoc(doc(db, "todos", todo.id), {title:title});
};
const toggleComplete = async(todo)=>{
  await updateDoc(doc(db, "todos", todo.id),{ //будет обновляться если задача завершена или нет 
    completed: !todo.completed
  });
};
const handleDelete = async(id)=>{
  await deleteDoc(doc(db, "todos", id))
}

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
      <AddTodo/>
      </div>
      <div className="todo_container">
      {todos.map((todo)=>(
        <Todo
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
        handleEdit={handleEdit}/>

      ))}
      </div>
    </div>
  );
};

export default App;
