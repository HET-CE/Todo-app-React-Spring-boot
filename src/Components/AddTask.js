import React, { Component } from 'react'
import TodoService from '../Service/Todoservice'

class AddTask extends Component {
    state = {
        id: this.props.match.params.id,
        task: '',
        lastModified: '',
        createdAt: '',
        endDate: ''
    }

    changeTaskHandler = (event) => {
        this.setState({ task: event.target.value })
    }
    changeLastModified = (event) => {
        this.setState({ lastModified: event.target.value })
    }
    changeCretedAt = (event) => {
        this.setState({ createdAt: event.target.value })
    }
    changeendDate = (event) => {
        this.setState({ endDate: event.target.value})
    }

    cancel = () => {
        this.props.history.push("/");
    }

    componentDidMount() {

        if (this.state.id == -1) {
            return
        }
        else {
            TodoService.getTodoById(this.state.id).then((res) => {
                let todo = res.data;
                this.setState({
                    task: todo.task,
                    lastModified: todo.lastModified,
                    createdAt: todo.createdAt,
                    endDate: todo.endDate
                })
            })
        }
    }

    saveTodo = (e) => {
        e.preventDefault();
        let todo = { task: this.state.task, lastModified: this.state.lastModified, createdAt: this.state.createdAt, endDate: this.state.endDate};

        if(this.state.id == -1){
            TodoService.addTodo(todo).then(res => {
                this.props.history.push("/");
            })
        }
        else{
            TodoService.updateTodo(todo, this.state.id).then(res => {
                this.props.history.push('/');
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className=" text-center">{ this.state.id == -1 ? "Add Todo": "Update Todo" }</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="">Task</label>
                                        <input type="text" placeholder="Task" name="task" className="form-control"
                                            value={this.state.task} onChange={this.changeTaskHandler} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Last Modified</label>
                                        <input type="date" placeholder="Last Modified" name="lastModified" className="form-control"
                                            value={this.state.lastModified} onChange={this.changeLastModified} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Created At</label>
                                        <input type="date" placeholder="Created At" name="createdAt" className="form-control"
                                            value={this.state.createdAt} onChange={this.changeCretedAt} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">End At</label>
                                        <input type="date" placeholder="End Date" name="endDate" className="form-control"
                                            value={this.state.endDate} onChange={this.changeendDate} required />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveTodo}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTask;

