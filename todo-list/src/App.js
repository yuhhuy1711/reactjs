import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
      this.todoItems = [
        '1', '2', '3'
      ];
    <div className="App">
      <header className="App-header">
        {
          this.todoItems.map((item) => <TodoItem title={item}/>);
        }
        <TodoItem title="tap the duc"/>
        <TodoItem title="day som"/>
        <TodoItem title="doc sach"/>
      </header>
    </div>
  );
}

export default App;
