import React from "react"
import Result from "./result"
export default class CreateQuiz extends React.Component {
    
    constructor(){
        super()
        this.state ={
            currentQuiz: "",
            allQuiz: [],
            counter: 0,
            correct: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    componentDidMount(){
        fetch("https://opentdb.com/api.php?amount=10")
            .then(response => response.json())
            .then(response => {
                const {results} = response
                console.log(results)
                this.setState({
                    allQuiz: results
                })
            })
            
        }


    handleInput(e){
        this.setState({
            correct: this.state.correct + 1
        })
        console.log(this.state.correct)
    }

    incrementCounter(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    sendResult(){
        this.props.finishQuiz()
    }
    
    render(){
        const {allQuiz, counter} = this.state
        console.log(allQuiz)
        return(
        
        allQuiz.length ?
           counter < allQuiz.length ? 
            <div>
                <h4>Question # {counter}:  {allQuiz[counter].question}</h4>   
                <p>
                    { allQuiz[counter].incorrect_answers.map((index) =>{
                       return   <label>
                                    <input  value={allQuiz[counter].incorrect_answers} name="group1" type="radio" />
                                    <span key={counter}>{index}</span>
                                </label>
                    
                    })
                    }
                </p>        
                <p>
                <label>
                    <input onChange={this.handleInput} value={allQuiz[counter].correct_answer} name="group1" type="radio" />
                    <span key={counter}>{allQuiz[counter].correct_answer}</span>
                </label>
                </p>
                <button onClick={this.incrementCounter} style={{width: 300, marginTop: 30}} className="waves-effect waves-light btn-small " type="submit">Next</button>}
            </div>
            : <div>
                    <Result correctAnswers={this.state.correct}/>
              </div>
                : 
                <h1>nhi aya Baba</h1>   
        )
        
    }
}