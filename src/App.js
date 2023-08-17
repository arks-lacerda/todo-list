import './App.css';
import { TodoList } from './Components/TodoList';

function App() {
  return (
    <div className="container">
      <section>
        <h1>Custom TODO-List</h1>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
