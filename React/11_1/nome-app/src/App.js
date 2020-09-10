import React from 'react';
import './App.css';

const taskList = ['Trabalhar', 'Estudar', "Namorar", 'Beber', 'Me Divertir', 'Dormir'];

const task = (value) => {
  return (
    <li>{value}</li>,
    taskList.map(task => <li>{task}</li>)    
  );
}



function App() {
  return task('oaushdousaodsahuohadohdaohdouhaduohduduoshou');
}

export default App;
