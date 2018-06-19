"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const project_list_1 = require("./projects/project-list");
const project_1 = require("./projects/project");
const props_route_1 = require("./utils/props-route");
const projects_1 = require("../resources/projects");
const tasks_1 = require("../resources/tasks");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.clearDone = (projectId) => {
            const currentProject = this.state.projects.find(project => project.id === projectId);
            this.setState({
                tasks: tasks_1.TaskList.map(task => {
                    if (currentProject.todoList.includes(task.id)) {
                        task.done = false;
                    }
                    return task;
                })
            });
        };
        this.check = (event, checkedTask) => {
            this.setState({
                tasks: this.state.tasks.map(task => {
                    if (task.id === checkedTask.id) {
                        task.done = event.target.checked;
                    }
                    return task;
                })
            });
        };
        this.state = {
            tasks: tasks_1.TaskList,
            projects: projects_1.ProjectList
        };
    }
    render() {
        return (React.createElement(react_router_dom_1.HashRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Redirect, { exact: true, from: "/", to: "/project-list" }),
                React.createElement(props_route_1.PropsRoute, { exact: true, path: "/project-list", component: project_list_1.Projects, projects: this.state.projects }),
                React.createElement(props_route_1.PropsRoute, { path: "/project-list/:number", component: project_1.ProjectComponent, projects: this.state.projects, tasks: this.state.tasks, clearDone: this.clearDone, check: this.check }))));
    }
}
exports.App = App;
