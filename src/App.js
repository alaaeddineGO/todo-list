import { useRef, useState } from 'react';
import './_App.scss';

export default function App() {
  const [todos,setTodos] = useState([]);
  const inp = useRef();
  function handelAddTask(){
    const text = inp.current.value;
    const newTask = {complited:false,text}
    setTodos([...todos,newTask  ])
    inp.current.value = '';
  }
  function handelcomlitedTask(key){
    const newTask = [...todos]
    newTask[key].complited=!newTask[key].complited
    setTodos(newTask)
  }
  function handeldeleteTask(key){
    const newTask = [...todos]
    newTask.splice(key,1)
    setTodos(newTask)
  }
  return (
    <div className="App">
      <div className='container'>
        <h2>Todo List</h2>
        <div className='inp-form'>
          <input type='text' placeholder='entr your task' ref={inp}/>
          <button type='submit' onClick={handelAddTask}>Add</button>
        </div>
        <ul>
          {todos.map((task,key)=>{
            return(
              <div className='item'>
                <li 
                className={todos[key].complited?'complited':''} 
                key={key} 
                onClick={()=>handelcomlitedTask(key)}
                >
                  {task.text}
                </li>
                <span onClick={()=>handeldeleteTask(key)} >🗡️</span>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

