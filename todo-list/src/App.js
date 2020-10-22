import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  let todoItems = [
    { title: 'tap the duc', isComplete: true}, 
    { title: 'day som', isComplete: true}, 
    { title: 'an sang'}
  ];
  return (
    <div className="App">
        {
        todoItems.length > 0 && todoItems.map((item, index) => <TodoItem key={index} item={item}/>)
        }
        {
          todoItems.length === 0 && 'Nothing hereee'
        }
    </div>
  );
}

export default App;
