import * as React from "react";
import {Link} from 'react-router-dom';


export const Projects = (props) => {

    const getProjects = () => (
        props.projects.map(project => {
            return <li key={project.id}>
                <Link to={`/project-list/${project.id}`}>{project.name}</Link>
            </li>
        })
    );

    return (
        <ul>
            {getProjects()}
        </ul>
    );
}