import React, {useState} from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import LectureForm from './components/LectureForm'
// import Results from './components/Results'
// import HookForm from './components/HookForm'
// import Header from './components/Header'
// import PropItUp from './components/PropItUp'
// import Count from './components/Count'
import Form from './components/Form'
import MessageResult from './components/MessageResult'
// import HookReducer from './components/HookReducer'
// import ReducerToDo from './components/ReducerToDo';



function App(props) {
  const [message, setMessage] = useState("")
  

    return (
      <>
      <Form setMessage={setMessage} message={message}/>
      <MessageResult message={message}/>
      </>
    )

}

export default App;
