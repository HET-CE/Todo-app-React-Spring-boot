import React, { Component } from 'react'
import Todoservice from '../Service/Todoservice'

export default class Todo extends Component {
    state= {
        	users:[]
        }

    componentDidMount(){
        Todoservice.getTodos().then((Response) => {
            this.setState({users: Response.data})   
        })
    }

    add = () =>{
        this.props.history.push("/add-todo/-1");
    }
    
    updateHandler = (id) => {
        this.props.history.push(`/add-todo/${id}`);
    }
    viewHandler = (id) => {
        this.props.history.push(`/view-todo/${id}`);
    }
    deleteHandler = (id) => {
        Todoservice.deleteTodo(id).then((res) => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        })
    }

    render() {
        return (
            <div>
                <h1 className = "text-center"> Your Todo List:</h1>
                <button className = "btn btn-primary m-2" onClick = {this.add}>Add Task</button>
                <table className = "table table-striped table-hover m-2" >
                    <thead className = "thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>Task</td>
                            {/* <td>Last Modified</td>
                            <td>Created At:</td> */}
                            <td className = "text-danger">End Date:</td>
                            <td>Actions:</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.users.map((user) => {
                                return(<tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.task}</td>
                                    {/* <td>{user.lastModified}</td>
                                    <td>{user.createdAt}</td> */}
                                    <td className = "text-danger">{user.endDate}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={() => this.updateHandler(user.id)}>Update</button>
                                        <button className="btn btn-warning" style={{marginLeft: "10px"}} onClick = {() => this.viewHandler(user.id)}>View</button>
                                        <button className="btn btn-danger" style={{marginLeft: "10px"}}  onClick = {() => this.deleteHandler(user.id)}>Delete</button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}
