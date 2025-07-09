import './App.css';
import TodoList from './components/ TodoList';
import TodoInput from './components/TodoInput';
 

function App() {
  return (
    <div className="container">
      <div className="app-box">
        <h1>📝 Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
