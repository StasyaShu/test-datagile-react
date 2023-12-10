import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <div className='wrapper'>
          <TodoForm />
        </div>
      </header>
      <main className='app-main'>
        <div className='wrapper'>
          <h1>Список задач</h1>
          <div className='app-main__content'>
            <div className='app-main__block'>
              <TodoList />
            </div>
            <div className='app-main__block'>
              {/* фильтры по статусу */}
              {/* сортировка по статусу или наименованию */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
