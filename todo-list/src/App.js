import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  let todoItems = [
    { title: 'tap the duc', isComplete: true}, 
    { title: 'day som'}, 
    { title: 'an sang'}];
  return (
    <div className="App">
      <header className="App-header">
        {
          todoItems.map((item, index) => <TodoItem key={index} item={item}/>)
        }
      </header>
    </div>
  );
}

export default App;
