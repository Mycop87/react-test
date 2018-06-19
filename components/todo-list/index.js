"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const done_list_1 = require("./done-list");
const new_list_1 = require("./new-list");
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.tasks
        };
    }
    getDoneList() {
        return this.state.tasks.filter(task => task.done) || [];
    }
    getNewList() {
        return this.state.tasks || [];
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(new_list_1.NewList, { tasks: this.getNewList(), check: this.props.check }),
            React.createElement(done_list_1.DoneList, { tasks: this.getDoneList(), projectId: this.props.projectId, clearDone: this.props.clearDone })));
    }
}
exports.TodoList = TodoList;
