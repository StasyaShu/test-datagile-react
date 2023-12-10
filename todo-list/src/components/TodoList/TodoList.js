import {useSelector, useDispatch} from 'react-redux';
import {MdDeleteOutline} from 'react-icons/md';
import {FaCheck} from 'react-icons/fa6';
import {
  deleteTodo,
  setTodoIsDone,
  selectTodos,
} from '../../redux/slices/todoSlice';
import {
  selectOnlyFinished,
  selectSortValue,
} from '../../redux/slices/filtersSlice';
import './TodoList.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const onlyFinishedFilter = useSelector(selectOnlyFinished);
  const sortValue = useSelector(selectSortValue);

  console.log(sortValue);

  const filteredTodos = todos.filter(todo => {
    if (onlyFinishedFilter === null) return true;
    const matchesFinished = onlyFinishedFilter ? todo.isDone : true;
    const matchesActive = !onlyFinishedFilter ? !todo.isDone : true;
    return matchesFinished && matchesActive;
  });

  function byField(fieldName) {
    return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
  }

  filteredTodos.sort(byField(sortValue));

  const handleDeleteTodo = todoId => {
    dispatch(deleteTodo(todoId));
  };

  const handleFulfillTodo = todoId => {
    dispatch(setTodoIsDone(todoId));
  };

  return (
    <div className='todo-list'>
      {filteredTodos.length === 0 ? (
        <p className='todo-list__no-todos'>Задачи отсутствуют.</p>
      ) : (
        <ul>
          {filteredTodos.map(todo => (
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
