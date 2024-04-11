import React from 'react';
import Title from '../organisms/title';
import Antiguo from '../organisms/classes-antiguo';
import CIButton from '../organisms/ci-button';
import Counter from '../organisms/counter';
import Regex from '../organisms/regex';

function App() {
  return (
    <div>
      <Title/>
      <Antiguo/>
      <CIButton onClick={()=>{}} variant="contained" color="sucess">Click me</CIButton>
      <Counter title='Counter' counter={0} increment='Increment' decrement='Decrement'/>
      <Regex/>
    </div>
  );
}

export default App;
