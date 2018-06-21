import * as React from "react";
import {DoneList} from './done-list';
import {NewList} from './new-list';


export const TodoList = (props) => {

    const getDoneList = () => {
        return props.tasks.filter(task => task.done) || [];
    }

    const getNewList = () => {
        return props.tasks || [];
    }

    return (
        <div>
            <NewList tasks={getNewList()} check={props.check}/>
            <DoneList tasks={getDoneList()} projectId={props.projectId} clearDone={props.clearDone}/>
        </div>
    );

}