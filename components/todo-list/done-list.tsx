import * as React from "react";
import {Task} from '../../interfaces/task'
import './style.css'

export const DoneList = (props:any) => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
        props.clearDone(props.projectId);
    }

    const button = () => {
        return <input type="button" onClick={(ev) => {
            handleSubmit(ev)
        }} value={`Clear Done (${props.tasks.length})`}/>
    }


    return (
        <div className="done-list">
            <ul>
                {props.tasks.map(task => {
                    return <li key={task.id}>{task.name}</li>
                })}
            </ul>
            {button()}
        </div>
    );

}