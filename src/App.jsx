import './App.css'
import MyFirstComponents from './componets/MyFirstComponents';
import SecondComponent from './componets/SecondComponent';
import ThirdComponents  from './componets/ThirdComponents';
import { Child } from './componets/child';
import { useState } from 'react';

function App() {

const [name, setName] = useState("cualquier cosa");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fundamentos de React</h1>
        <hr className='white-hr'/>
        <MyFirstComponents />
        <hr className='white-hr'/>
        <SecondComponent />
        <hr className='white-hr'/>
        <ThirdComponents 
        name="sergio"
        last_name="rivera"
        age="20"
        />
        <hr className='white-hr'/>
        <Child 
          name={name}
          setName={setName}
        />
      </header>
    </div>
  )
};

export default App
