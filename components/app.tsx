import * as React from "react";
import {HashRouter, Switch, Redirect} from 'react-router-dom';
import {Projects} from './projects/project-list';
import {ProjectComponent} from "./projects/project";
import {PropsRoute} from "./utils/props-route";
import {ProjectList} from '../resources/projects';
import {TaskList} from '../resources/tasks';
import {Task} from '../interfaces/task'
import {Project} from '../interfaces/project'


interface TodoListProps {
}

interface TodoListState {
    tasks: Array<Task>;
    projects: Array<any>;
}

export class App extends React.Component<TodoListProps, TodoListState> {

    constructor(props: TodoListProps) {
        super(props);

        this.state = {
            tasks: TaskList,
            projects: ProjectList
        };
    }

    private clearDone = (projectId) => {
        const currentProject = this.state.projects.find(project => project.id === projectId);
        this.setState({
            tasks: TaskList.map(task => {
                if(currentProject.todoList.includes(task.id)){
                    task.done = false;
                }
                return task;
            })
        })
    }

    private check = (event, checkedTask) => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id === checkedTask.id) {
                    task.done = event.target.checked;
                }
                return task;
            })
        });

    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect exact from="/" to="/project-list"/>
                    <PropsRoute exact path="/project-list" component={Projects} projects={this.state.projects}/>
                    <PropsRoute path="/project-list/:number"
                                component={ProjectComponent}
                                projects={this.state.projects}
                                tasks={this.state.tasks}
                                clearDone={this.clearDone}
                                check={this.check}/>
                </Switch>
            </HashRouter>
        );
    }
}
