import * as React from "react";

export const NewList = (props) => {

    const handleCheck = (event, task) => {
        props.check(event, task);
    }

    const getList = () => {
        return props.tasks.map(task =>
            <li key={task.id}>
                <input type="checkbox"
                       checked={task.done}
                       onChange={(ev) => handleCheck(ev, task)}
                />
                <label>{task.name}</label>
            </li>
        )
    }


    return (
        <ul>{getList()}</ul>
    );
}