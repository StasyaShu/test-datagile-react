import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo, setTodoIsDone} from '../../redux/slices/todoSlice';
import {MdDeleteOutline} from 'react-icons/md';
import {FaCheck} from 'react-icons/fa6';
import './TodoList.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleDeleteTodo = todoId => {
    dispatch(deleteTodo(todoId));
  };

  const handleFulfillTodo = todoId => {
    console.log(todoId);
    dispatch(setTodoIsDone(todoId));
  };

  return (
    <div className='todo-list'>
      {todos.length === 0 ? (
        <p className='todo-list__no-todos'>Задачи отсутствуют.</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <div className='todo-list__checkbox todo-checkbox'>
                <label
                  className={
                    todo.isDone
                      ? 'todo-checkbox__label todo-checkbox__label--checked'
                      : 'todo-checkbox__label'
                  }
                >
                  <FaCheck
                    className={
                      todo.isDone
                        ? 'todo-checkbox__visible'
                        : 'todo-checkbox__invisible'
                    }
                  />
                  <input
                    className='visually-hidden'
                    type='checkbox'
                    checked={todo.isDone}
                    aria-label='Отметить задание как выполненное'
                    onChange={() => handleFulfillTodo(todo.id)}
                  />
                </label>
              </div>
              <p className={todo.isDone ? 'todo-text-done' : ''}>{todo.text}</p>
              <div className='delete-button'>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  <span className='visually-hidden'>Удалить задачу</span>
                  <MdDeleteOutline />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
