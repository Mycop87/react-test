"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.getProjects = () => (this.state.projects.map(project => {
            return React.createElement("li", { key: project.id },
                React.createElement(react_router_dom_1.Link, { to: `/project-list/${project.id}` }, project.name));
        }));
        this.state = {
            projects: props.projects
        };
    }
    render() {
        return (React.createElement("ul", null, this.getProjects()));
    }
}
exports.Projects = Projects;
