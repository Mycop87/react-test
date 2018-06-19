"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
class DoneList extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = (ev) => {
            ev.preventDefault();
            this.props.clearDone(this.props.projectId);
        };
        this.button = () => {
            return React.createElement("input", { type: "button", onClick: (ev) => {
                    this.handleSubmit(ev);
                }, value: `Clear Done (${this.state.tasks.length})` });
        };
        this.state = {
            tasks: props.tasks
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            tasks: nextProps.tasks
        });
    }
    render() {
        return (React.createElement("div", { className: "done-list" },
            React.createElement("ul", null, this.state.tasks.map(task => {
                return React.createElement("li", { key: task.id }, task.name);
            })),
            this.button()));
    }
}
exports.DoneList = DoneList;
