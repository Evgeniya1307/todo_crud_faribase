import React from 'react'
import { db } from '../firebase'
import {collection, addDoc} from "firebase/firestore";


//добавления документа
export const  AddTodo = ({ task, tasks, setTasks, setTask }) => {
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [date, setDate] = React.useState("");
  const [error, setError] = React.useState(false);

    React.useEffect(() => {
      if (Object.keys(task).length > 0) {
        setTitle(task.title);
        setMessage(task.message);
        setDate(task.date);
        console.log("A task  👨‍⚖️  ");
      }
    }, [task]);


      const generateID = () => {
        const id = Math.random().toString(20).substr(2);
        return id;
      };


    const handleSumbit=async(e)=>{
        e.preventDefault();
        if ([title, message, date ].includes("")){
            await addDoc(collection(db, "todos"),{ //фу-ия для добавления документа для хранения данных в базе данных
               title,
               completed:false, 
            });
            setTitle("");
            setError(true)
      return;
    };

    setError(false);
    const taskObject = {
      title,
      message,
      date,
      id: generateID(),
    };

    if (task.id) {
        taskObject.id = task.id;
        const updatedTasks = tasks.map((resp) =>
          resp.id === task.id ? taskObject : resp
        );
        setTasks(updatedTasks);
        setTask({});
      } else {
        taskObject.id = generateID();
        setTasks([...tasks, taskObject]);
      }
      setTitle("");
      setMessage("");
      setDate("");
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
        <button>Добавить</button>
        </div>
        </form>
    );
}


export default AddTodo;