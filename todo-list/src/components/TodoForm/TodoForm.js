import {useState} from 'react';
import {useDispatch} from 'react-redux';
import createTodo from '../../utils/createTodo';
import {setTodo} from '../../redux/slices/todoSlice';
import {FiPlus} from 'react-icons/fi';
import './TodoForm.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (text) {
      const todo = createTodo({text});
      dispatch(setTodo(todo));
      setText('');
    }
  };

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'>Новая задача</label>
        <input
          type='text'
          id='todo'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type='submit'>
          <FiPlus /> Добавить
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
