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
import { db } from "./firebase"; //



function App (){
  const [tasks, setTasks] = React.useState([]);
  const [task, setTask] = React.useState({});
 
  //получаю данные 
React.useEffect(()=>{
const q= query(collection(db,"tasks"));
const unsub= onSnapshot(q,(querySnapshot)=>{ //запрос
  let tasksArray=[];//временный массив для задач
  querySnapshot.forEach((doc)=>{
    tasksArray.push({...doc.data(), id:doc.id});//каждое действие помещаю во временный массив
  })
  setTasks(tasksArray)
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
  await deleteDoc(doc(db, "todos", id)) //на удаление 
}

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
      <AddTodo task={task} tasks={tasks} setTasks={setTasks} setTask={setTask}/>
      </div>
      <div className="todo_container">
      {tasks.map((task)=>(
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
