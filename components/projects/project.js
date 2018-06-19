"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const index_1 = require("../todo-list/index");
class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);
        const currentProject = props.projects.find(project => project.id === parseInt(props.match.params.number));
        this.state = {
            id: currentProject.id,
            name: currentProject.name,
            todoList: props.tasks.filter(task => currentProject.todoList.includes(task.id)) || []
        };
    }
    render() {
        return (React.createElement("div", null,
            this.state.name,
            React.createElement(index_1.TodoList, { tasks: this.state.todoList, projectId: this.state.id, clearDone: this.props.clearDone, check: this.props.check })));
    }
}
exports.ProjectComponent = ProjectComponent;
