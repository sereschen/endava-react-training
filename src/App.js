import React from 'react';
import TasksForm from './components/TasksForm';
import Input from './components/Input';
import Button from './components/Button';
import TaskItem from './components/TaskItem';
import TaskCounter from './components/TaskCounter';

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

  addTask = event => {
    event.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.inputValue],
      inputValue: '',
    });
  };

  handlerDelete = currentTask => {
    this.setState({
      tasks: this.state.tasks.filter(task => task !== currentTask),
    });
  };

  render() {
    return (
      <div style={styles}>
        <TasksForm onSubmit={this.addTask}>
          <Input
            value={this.state.inputValue}
            placeholder="Ingrese la tarea"
            onChange={this.handleInputSearch}
          />
          <Button buttonType="submit">Agregar</Button>
        </TasksForm>
        <ul style={{ width: '100%' }}>
          {this.state.tasks.map((task, idx) => (
            <TaskItem
              key={idx}
              task={task}
              onDelete={() => this.handlerDelete(task)}
            />
          ))}
        </ul>
        <TaskCounter count={this.state.tasks.length} />
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
