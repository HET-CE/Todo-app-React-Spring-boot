import React, { Component } from 'react'
import Todoservice from '../Service/Todoservice'

export default class ViewEmployee extends Component {
    state = {
        id: this.props.match.params.id,
        todo: {}
    }
    
    componentDidMount(){
        Todoservice.getTodoById(this.state.id).then(res => {
            this.setState({todo: res.data});
        })
    }
    backToHome = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Task Details</h3>
                    <hr />
                    <div className="card-body">
                    <div className="row">
                        <label>TODO ID:</label>
                        <h3>{this.state.todo.id}</h3>
                        <hr />
                        <label>Task: </label>
                        <h3>{this.state.todo.task}</h3>
                        <hr />
                        <label>Last Modified At:</label>
                        <h3>{this.state.todo.lastModified}</h3>
                        <hr />
                        <label>Created At:</label>
                        <h3>{this.state.todo.createdAt}</h3>
                        <hr />
                        <label>End Date:</label>
                        <h3>{this.state.todo.endDate}</h3>
                    </div>
                    </div>
                    <button className="btn btn-warning" onClick = {this.backToHome}>Back To Home Page</button>
                </div>
            </div>
        )
    }
}
