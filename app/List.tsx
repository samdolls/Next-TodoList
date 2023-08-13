import React, {useState} from "react";
import Detail from "./Detail";
import styles from './List.module.css'

type Todo = {
    id : number,
    task : string,
    completion : string
};

function List(){
    const [value, setValue] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [tid, setTid] = useState<number>(0);
    
    const addTodo = (tid : number, value : string) => {
        const newTodo = {"id":tid, "task" : value, "completion" : "미완료"};
        setTid(tid + 1);
        setTodos([...todos, newTodo]);
        setValue('');
    };

    const handleUpdate = (eid:number, value:string, completion:string) => {
        const editTodo =
        todos.map(
            (todo) => todo.id === eid ? {...todo, "id" : eid, "task": value, "completion" : completion} : todo
        )
        setTodos(editTodo);
    };

    const handleDelete = (did : number) => {
        let deleteTodo = [...todos];
        const deleted = deleteTodo.filter((todo) => todo.id !== did);
        setTodos(deleted);
    }


    return(
        <div className="root">
            <input className="add-inputbox" type="text" value = {value} onChange = {(e)=>{setValue(e.target.value)}}/>
            <button className="buttonbox" onClick = {()=>addTodo(tid, value)}>추가</button>
            <ul>
                {
                    todos.map(
                        (todo) => (
                            <li>{todo.id} {todo.task} {todo.completion}
                            <Detail key = {todo.id} todo = {todo} onUpdate = {handleUpdate} onDelete = {handleDelete}/></li>
                        )
                    )
                }
            </ul>
        </div>
    );
};
export default List