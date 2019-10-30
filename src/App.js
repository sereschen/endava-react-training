import React from 'react';
import TasksForm from './components/TasksForm';
import Input from './components/Input';
import Button from './components/Button';

class App extends React.Component {
  state = {
    inputValue: '',
    tasks: [],
  };

  handleInputSearch = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  addTask = task => {
    this.setState({
      tasks: [...this.state.tasks, task],
      inputValue: '',
    });
  };

  render() {
    return (
      <div style={styles}>
        <TasksForm>
          <Input
            value={this.state.inputValue}
            placeholder="Ingrese la tarea"
            onChange={this.handleInputSearch}
          />
          <Button onClick={() => this.addTask(this.state.inputValue)}>
            Agregar
          </Button>
        </TasksForm>
        <ul>
          {this.state.tasks.map(task => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  width: '100vw',
  height: '100vh',
  border: '1px solid red',
  display: 'flex',
  alignItems: 'center',
  padding: '50px 25px',
  flexDirection: 'column',
};

export default App;
