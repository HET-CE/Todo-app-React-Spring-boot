import axios from 'axios'

const TASK_URL = 'http://localhost:8080/api/todo';


class Todoservice{
    getTodos(){
        return axios.get(TASK_URL);
    }
    addTodo(todo){
        return axios.post(TASK_URL, todo);
    }
    getTodoById(todoId){
        return axios.get(TASK_URL + "/" + todoId);
    }
    updateTodo(todo, todoId){
        return axios.put(TASK_URL + "/" + todoId, todo);
    }
    deleteTodo(todoId){
        return axios.delete(TASK_URL + "/" + todoId);
    }
}

export default new Todoservice();

// import axios from 'axios';

// const Employee = "http://localhost:8080/api/v1/employees";

// class EmployeeService {
    
//     getEmployees(){
//         return axios.get(Employee);
//     }
//     createEmployee(employee){
//         return axios.post(Employee, employee);
//     }
//     getEmployeeById(employeeId){
//         return axios.get(Employee + '/' + employeeId);
//     }
//     updateEmployee(employee, employeeId){
//         return axios.put(Employee + '/' + employeeId, employee);
//     }
//     deleteEmployee(employeeId){
//         return axios.delete(Employee + '/' + employeeId);
//     }
// }

// export default new EmployeeService();