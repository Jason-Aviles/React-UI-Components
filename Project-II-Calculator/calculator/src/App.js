import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import Action from './components/ButtonComponents/ActionButton'
import Display from './components/DisplayComponents/CalculatorDisplay'
const App = () => {
 

  return (
    <div className='main-container'>
    
    <Display/>
<Action name='clear'  />
      <NumberButton/>
      <Action  name='0' />
    </div>
  );
};

export default App;
