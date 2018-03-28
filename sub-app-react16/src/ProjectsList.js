import React, {Component} from 'react'

export class ProjectsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            projects: []
        };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h2>Projects {this.state.projects}.</h2>
            </div>
        );
    }

    componentDidMount() {
        fetch('http://192.168.208.155:8080/endpoint/v1/projects', {
            method: 'GET',
            credentials: 'same-origin'
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    projects: data.projects
                });
            });
    }
}

