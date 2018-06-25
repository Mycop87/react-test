import * as React from "react";
import {TodoList} from "../todo-list/index";
import {Task} from "../../interfaces/task";

interface ProjectProps {
    match: any;
    projects: Array<any>;
    tasks?: Array<Task>;
    clearDone:any;
    check:any;
}

interface ProjectState {
    id: number;
    name: string;
    todoList?: Array<Task>;
}

export class ProjectComponent extends React.Component<ProjectProps, ProjectState> {

    constructor(props: ProjectProps) {
        super(props);

        const currentProject = props.projects.find(project => project.id === parseInt(props.match.params.number));

        this.state = {
            id: currentProject.id,
            name: currentProject.name,
            todoList: props.tasks.filter(task => currentProject.todoList.includes(task.id)) || []
        };
    }

    render() {
        return (
            <div>
                {this.state.name}
                <TodoList tasks={this.state.todoList}
                          projectId={this.state.id}
                          clearDone={this.props.clearDone}
                          check={this.props.check}/>
            </div>
        );
    }
}