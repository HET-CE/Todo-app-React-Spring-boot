import React, { Component } from 'react'
import Todoservice from '../Service/Todoservice'

// Ignore this Modified symbol front of this file changes pushed already on github.
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
    
    
    viewHandler = (id) => {
        this.props.history.push(`/view-todo/${id}`);
    }
    
    render() {
        return (
            <div>
                <h1 className = "text-center"> Your Todo List:</h1>
                <button className = "btn btn-danger m-2" onClick = {this.add}>Add Task</button>
                <table className = "table table-striped table-hover m-2" style={{width: "99vw"}}>
                    <thead className = "thead-dark">
                        <tr style={{color: "#ffffff"}}>
                            <td>Task</td>
                            <td>Last Modified</td>
                            <td>Created At:</td>
                            <td className = "text-danger">End Date:</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.users.map((user) => {
                                return(<tr key = {user.id}  style={{cursor: "pointer", color: "#ffffff"}} onClick = {() => this.viewHandler(user.id)}>
                                    <td>{user.task}</td>
                                    <td>{user.lastModified}</td>
                                    <td>{user.createdAt}</td>
                                    <td className = "text-danger">{user.endDate}</td>
                                </tr>)
                            })
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}
