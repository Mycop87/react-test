import * as React from "react";
import {Task} from '../../interfaces/task'
import './style.css'


interface DoneListProps {
    tasks: Array<Task>;
    clearDone: any;
    projectId: number;
}

interface DoneListState {
    tasks?: Array<Task>;
}


export class DoneList extends React.Component<DoneListProps, DoneListState> {

    constructor(props: DoneListProps) {
        super(props);

        this.state = {
            tasks: props.tasks
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tasks: nextProps.tasks
        });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.clearDone(this.props.projectId);
    }

    private button = () => {
        return <input type="button" onClick={(ev) => {
            this.handleSubmit(ev)
        }} value={`Clear Done (${this.state.tasks.length})`}/>
    }

    render() {
        return (
            <div className="done-list">
                <ul>
                    {this.state.tasks.map(task => {
                        return <li key={task.id}>{task.name}</li>
                    })}
                </ul>
                {this.button()}
            </div>
        );
    }
}