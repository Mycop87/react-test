import * as React from "react";
import {Task} from '../../interfaces/task'

interface NewListProps {
    tasks: Array<Task>;
    check: any;
}

interface NewListState {
    tasks?: Array<Task>;
}


export class NewList extends React.Component<NewListProps, NewListState> {

    constructor(props: NewListProps) {
        super(props);

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

    private getList = () => {
        return this.state.tasks.map(task =>
            <li key={task.id}>
                <input type="checkbox"
                       checked={task.done}
                       onChange={(ev) => this.handleCheck(ev, task)}
                />
                <label>{task.name}</label>
            </li>
        )
    }

    render() {
        return (
            <ul>{this.getList()}</ul>
        );
    }
}