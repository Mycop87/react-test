import * as React from "react";
import {DoneList} from './done-list';
import {NewList} from './new-list';
import {Task} from '../../interfaces/task'


interface TodoListProps {
    tasks: Array<Task>;
    clearDone: any;
    check: any;
    projectId: number;
}

interface TodoListState {
    tasks: Array<Task>;
}


export class TodoList extends React.Component<TodoListProps, TodoListState> {

    constructor(props: TodoListProps) {
        super(props);

        this.state = {
            tasks: props.tasks
        };
    }

    private getDoneList() {
        return this.state.tasks.filter(task => task.done) || [];
    }

    private getNewList() {
        return this.state.tasks || [];
    }

    render() {
        return (

            <div>
                <NewList tasks={this.getNewList()} check={this.props.check}/>
                <DoneList tasks={this.getDoneList()} projectId={this.props.projectId} clearDone={this.props.clearDone}/>
            </div>
        );
    }
}