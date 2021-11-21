import TodoList from './components/todolist'
import './App.css';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <h1 class="center text-secondary display-3 mt-3 mb-3">Lists</h1>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
