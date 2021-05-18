import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddTask from './Components/AddTask';
import ViewTask from './Components/ViewTask';

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <Switch>
        <Route exact path="/" component={Todo}></Route>
        <Route path="/add-todo/:id" component={AddTask}></Route>
        <Route path="/view-todo/:id" component={ViewTask}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
