import React from 'react';

import './styles/App.css';

import AuthorInfo from './components/AuthorInfo';
import PageTitle from './components/PageTitle';
// import TodoAdd from './components/TodoAdd';
// import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App-container">
      <AuthorInfo text="Made by: Ian Wirawan"></AuthorInfo>
      <AuthorInfo text="Student ID: 2502009596"></AuthorInfo>
      <PageTitle text="TODO List"></PageTitle>
      <div className="Todo-list-container">
        
      </div>
    </div>
  );
}

export default App;
