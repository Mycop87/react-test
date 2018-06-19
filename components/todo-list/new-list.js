"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class NewList extends React.Component {
    constructor(props) {
        super(props);
        this.getList = () => {
            return this.state.tasks.map(task => React.createElement("li", { key: task.id },
                React.createElement("input", { type: "checkbox", checked: task.done, onChange: (ev) => this.handleCheck(ev, task) }),
                React.createElement("label", null, task.name)));
        };
        this.state = {
            tasks: props.tasks
        };
        this.handleCheck = this.handleCheck.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            tasks: nextProps.tasks
        });
    }
    handleCheck(event, task) {
        this.props.check(event, task);
    }
    render() {
        return (React.createElement("ul", null, this.getList()));
    }
}
exports.NewList = NewList;
