import './App.css';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <div className='wrapper'>
          {/* форма с инпутом и кнопкой Добавить */}
        </div>
      </header>
      <main className='app-main'>
        <div className='wrapper'>
          <h1>Список задач</h1>
          <div className='app-main__content'>
            <div className='app-main__block'>
              {/* список задач с чекбоксом и кнопкой удаления */}
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