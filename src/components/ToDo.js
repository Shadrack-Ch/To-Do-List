import React from "react";



const ToDo = ({todo,handleToggle}) => {

    const handleClick = (e) => {
        //e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return(
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id}>
            <label>
                <input id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} type="checkbox" onChange={handleClick} checked={todo.complete} />
                {todo.task}
            </label>
        </div>
    );

};

export default ToDo; 