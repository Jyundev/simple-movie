import React, { useState } from "react";

function ToDo() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([])
    const onChange = (event) => {setToDo(event.target.value)}
    const onSubmit = (event) => {

        event.preventDefault(); //새로고침 방지
        if (toDo==""){
            return;
        }

        setToDos((currentArray)=> [toDo, ... currentArray] )
        setToDo("");
    };

    console.log(toDos)

    return <div>
        <h1>My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input
                value={toDo}
                onChange={onChange}
                type="text"
                placeholder="write your todo">
            </input>
            <button>Add To Do</button>
        </form>
        <hr />
        {toDos.map((item, index) => <li key = {index}> {item}</li>)}
    </div>
}


export default ToDo