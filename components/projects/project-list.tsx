import * as React from "react";
import {Link} from 'react-router-dom';
import {Project} from "../../interfaces/project";

interface ProjectsProps {
    projects: Array<Project>;
}

interface ProjectsState {
    projects: Array<Project>;
}


export class Projects extends React.Component<ProjectsProps, ProjectsState> {

    constructor(props: ProjectsProps) {
        super(props);

        this.state = {
            projects: props.projects
        };
    }

    private getProjects = () => (
        this.state.projects.map(project => {
            return <li key={project.id}>
                        <Link to={`/project-list/${project.id}`}>{project.name}</Link>
                    </li>
        })
    );

    render() {
        return (
            <ul>
                {this.getProjects()}
            </ul>
        );
    }
}