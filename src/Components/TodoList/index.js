import { useState } from 'react';
import { TodoItem } from '../TodoItem';
import './styles.css';

export const TodoList = () => {
  const defaultListItems = [
    { name: 'Task 1', isCompleted: true },
    { name: 'Task 2', isCompleted: false },
    { name: 'Task 3', isCompleted: false },
    { name: 'Task 4', isCompleted: false },
  ];
  const [items, setItems] = useState(defaultListItems);
  const [taskValue, setTaskValue] = useState('');

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (items.find((i) => i.name === taskValue)) {
      alert(`Task already exists: ${taskValue}`);
      return;
    }
    setItems([...items, { name: taskValue, isCompleted: false }]);
    setTaskValue('');
  };

  const handleOnTaskChanged = (e, item) => {
    setItems(
      items.map((i) => {
        if (i.name === item.name) {
          return {
            ...i,
            isCompleted: e.target.checked,
          };
        }
        return i;
      })
    );
  };

  return (
    <div className="container">
      <div className="todo-list-container">
        <p>
          Você conclui um total de {items.filter((i) => i.isCompleted).length}{' '}
          de {items.length} tarefas
        </p>
        <form onSubmit={handleTaskSubmit}>
          <input
            type="text"
            placeholder="Enter a task"
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
          />
          <button type="submit">Add task</button>
        </form>
        <div className="task-content">
          <h2>Tasks</h2>
          <ul>
            {items.map((item) => (
              <TodoItem
                key={item.name}
                item={item}
                onTaskChanged={handleOnTaskChanged}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
