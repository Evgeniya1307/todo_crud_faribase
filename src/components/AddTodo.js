import React from 'react'
import { db } from '../firebase'
import {collection, addDoc} from "firebase/firestore";



export default  function AddTodo(){
    const[title, setTitle] = React.useState("");

    const handleSumbit=async(e)=>{
        e.preventDefault();
        if (title !== ""){
            await addDoc(collection(db, "todos"),{ //фу-ия для добавления документа для хранения данных в базе данных
               title,
               completed:false, 
            });
            setTitle("");
        }
    };
    return(
        <form onSubmit={handleSumbit}>
        <div className='input_container'>
        <input 
        type="text"
        placeholder="Введите список дел..." //
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />
        </div>
        <div className='btn_container'>
        <button>Add</button>
        </div>
        </form>
    );
}
