import React from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import  "./App.css"
import Todo from "./components/Todo";
import {
  collection,
  query,
  onSnapsHot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firebase";
import { db } from "./firebase";
import { QuerySnapshot } from "firebase/firestore";

const App = () => {
  const[todo, setTodos]= React.useState([]);

  //получаю данные 
React.useEffect(()=>{
const q= query(collection(db,"todos"));
const unsub= onSnapsHot(q,(QuerySnapshot)=>{ //запрос
  let todosArray=[]//временный массив для
}) 
},[])

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
      <AddTodo/>
      </div>
    </div>
  );
};

export default App;
