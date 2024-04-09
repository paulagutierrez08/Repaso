import React from 'react';
import Title from './organisms/title';
import Antiguo from './organisms/classes-antiguo';
import CIButton from './organisms/ci-button';

function App() {
  return (
    <div>
      <Title/>
      <Antiguo/>
      <CIButton onClick={()=>{}} variant="contained" color="sucess">Click me</CIButton>
    </div>
  );
}

export default App;
