import React, {useState} from "react";

type Todo = {
    id: number;
    task: string;
    completion: string;
};
type onUpdateType = (eid:number, edit:string, completion:string)=>void;
type onDeleteType = (did:number)=>void;

function Detail({todo, onUpdate, onDelete}:{todo:Todo, onUpdate:onUpdateType, onDelete:onDeleteType}){
    const [edit, setEdit] = useState(todo.task)
    const [completion, setCompletion] = useState(todo.completion)

    const changeCompletion = (completion:string) => {
        const completed = completion === '미완료' ? '완료' : '미완료';
        setCompletion(completed);
    }

    const updateTodo = (eid:number, edit:string, completion:string) => {
        onUpdate(eid, edit, completion);
    };

    const deleteTodo = (did:number) => {
        onDelete(did);
    }

    return (
        <div>
            <input type = "text" value = {edit} onChange = {(e)=>{setEdit(e.target.value)}}/>
            <input type = "checkbox" checked = {completion === '완료'} onChange = {()=>{changeCompletion(completion)}}/>
            <button onClick={()=>{updateTodo(todo.id, edit, completion)}}>수정</button>
            <button onClick={()=>{deleteTodo(todo.id)}}>삭제</button>
        </div>
    )
};

export default Detail