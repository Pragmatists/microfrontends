import React, {Component} from 'react'
import Button from "./Button";
import './ProjectsList.css';

export class ProjectsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    render() {
        return (
            <div className="project-list">
                <h1>Hello, from react 16!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <Button text="bootstrap 4 button"/>
            </div>
        );
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}

