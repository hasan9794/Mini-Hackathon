import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/head"
import CreateQuiz from "./components/createQuiz" 
import Result from "./components/result"

class App extends Component {
  constructor(){
    super()
    this.state ={
      isLoggedIn: true,
      started: false

    }
    this.startQuiz = this.startQuiz.bind(this)
  }

  static getDerivedStateFromProps(){
    return {user: true}
  }

  finishQuiz(correct){
    this.setState({
      finished: true,
      started: false,
      result: correct
    })
  }


  startQuiz(){
    this.setState({
      started: true
    })
  }

  
  render() {
    const {started, finished, result} = this.state
    return (
      <div className="App">
        <Header 
          name="Quiz App"
        />
        {!started && <button onClick={this.startQuiz} style={{width: 300, marginTop: 30}} className="waves-effect waves-light btn-small " type="submit">Start Quiz</button>}
        {started &&
          <CreateQuiz finishQuiz={this.finishQuiz} />
        }
  
        <Result />
        
      </div>
    );
  }
}

export default App;
