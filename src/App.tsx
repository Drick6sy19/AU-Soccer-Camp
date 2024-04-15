import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import PlayerSkillEval from './components/playerSkillEval';
import './styles/projStyles.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PlayerSkillEval></PlayerSkillEval>
    </div>
  );
}

export default App;
