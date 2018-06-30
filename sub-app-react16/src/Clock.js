import React, {Component} from 'react'
import Button from "./Button";
import './Clock.css';

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running : true,
            date : new Date(),
        };
    }

    render() {
        const clockStateClass = this.state.running ? 'clock--running' : 'clock--paused';
        return (
            <div className={`clock ${clockStateClass}`}>
                <h1>Welcome to React 16 application!</h1>
                <h2 className='clock__time'>It is {this.state.date.toLocaleTimeString()}</h2>
                <Button text="Bootstrap 4 Button"/>
            </div>
        );
    }

    toggleClock = () => {
        if (this.timerID) {
            clearInterval(this.timerID);
            this.timerID = undefined;
            this.setState(() => ({
                running : false
            }))
        } else {
            this.setState(() => ({
                running : true
            }));
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }
    };


    componentDidMount() {
        console.log('componentDidMount');
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

        window.addEventListener("toggleClock", this.toggleClock);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        window.removeEventListener("toggleClock", this.toggleClock);
    }

    tick() {
        this.setState(() => ({
            date : new Date()
        }));
    }
}

