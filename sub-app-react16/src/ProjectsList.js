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

    onEvent = () => {
        console.log('got event');
        if (this.timerID) {
            console.log('stopping clock');
            clearInterval(this.timerID);
            this.timerID = undefined;
        } else {
            console.log('starting clock');
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }
    };


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

        window.addEventListener("toggleClock", this.onEvent);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        window.removeEventListener("toggleClock", this.onEvent);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}

