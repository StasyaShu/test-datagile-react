import {v4 as uuidv4} from 'uuid';

const createTodo = todo => {
  return {
    ...todo,
    isDone: false,
    id: uuidv4(),
  };
};

export default createTodo;
