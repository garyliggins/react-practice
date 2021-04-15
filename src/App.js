import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LectureForm from './components/LectureForm'
import Results from './components/Results'
// import HookForm from './components/HookForm'
// import Header from './components/Header'
// import PropItUp from './components/PropItUp'
// import Count from './components/Count'
// import Form from './components/Form'
function App(props) {
  const [firstName,setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="App">
      {/* <HookForm/> */}
      {/* <Form/> */}
      {/* <h1> Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <li>Learn React</li>
      <li>Climb mt everest</li>
      <li>run a marathon</li>
      <li>feed the dogs</li>
      <Header name="Gary"/> 
      <Header name="jim"/>
      <Header name="don"/>
      <Header name="no name"/>
      <PropItUp  name="Doe, Jane" age="45" hairColor="Black"/>
      <PropItUp  name="Smith, John" age="88" hairColor="Brown"/>
      <PropItUp  name="Fillmore, Millard" age="50" hairColor="Brown"/>
      <PropItUp  name="Smith, Maria" age="62" hairColor="Brown"/>
      <Count/> */}
      <LectureForm setFirstName={setFirstName} 
      setLastName={setLastName} 
      setEmail={setEmail} 
      setPassword={setPassword}/>
      <Results firstName={firstName}
      lastName={lastName}
      email={email}
      password={password}/>
    

    </div>
  );
}

export default App;
