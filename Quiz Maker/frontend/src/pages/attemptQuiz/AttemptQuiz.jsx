// Package imports
import React, { useState } from 'react'

// CSS imports
import './attemptQuiz.css'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';

function AttemptQuiz() {
  const navigate = useNavigate();
  const [verifyPassword,setVerifyPassword] = useState(false);
  const [startQuiz,setStartQuiz] = useState(false);
  // ####################################
  // ENTER PASSWORD SECTION
  // ####################################
  const [password,setPassword] = useState("");
  const [quizName,setQuizName] = useState("Test Quiz");
  const handleJoin = () => {
    console.log(`Quiz Name :${quizName}\nPassword :${password}`);
    setVerifyPassword(true);
    // API call to backend.
    // if (res.data.status) --> Get the quiz link (a random link).
    // Else --> Alert and throw error.
  }
  function QuizPassword() {
    return (
      // Wrapper to place the box at center
      <div className="attemptQuizPasswordWrapper">
        
        <div className="attemptQuizPasswordContainer">
          <div className="attemptQuizPasswordItem">
            <div className="QuizHeading"> Quiz Name : </div>
            <input type="text" className="quizPasswordBox" placeholder='Enter quiz name'
            onChange={(e) => {setQuizName(e.target.value)}} />
          </div>
          <div className="attemptQuizPasswordItem">
            <div className="QuizHeading"> Password : </div>
            <input type="text" className="quizPasswordBox" placeholder='Enter your password'
            onChange={(e) => {setPassword(e.target.value)}} />
          </div>
          <div className="quizPasswordSubmitBtn" onClick={() => {handleJoin()}}> Join </div>
        </div>
      
      </div>
    )
  }
  
  // ####################################
  // QUIZ GUIDELINES
  // ####################################
  const handleStartQuiz = () => {setStartQuiz(true)}
  function QuizDisplay() {
    return (
      <div className="attemptQuizPasswordWrapper">
          <div className="QuizGuidelinesContainer">
              <b>Read the Guidelines carefully :-</b>
              <ol style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                <li> It is compulsory to attempt all the questions </li>
                <li> There will be 15 Questions in total </li>
                <li> There are +1 mark for every correct answer and 0 marks for all other cases.</li>
                <li> You must complete the test in given time frame of 15 mins </li>
                <li> Use of any unfair means is strictly prohibited </li>
              </ol>
              <div className="quizPasswordSubmitBtn" style={{maxWidth:"400px"}}
              onClick={() => {handleStartQuiz()}}> Start </div>
          </div>
      </div>
    )
  }
  
  // ####################################
  // QUIZ CONTAINER
  // ####################################
  const [questions,setQuestions] = useState([
    {q_id:"1",question:"What is your name?",options:[]},
    {q_id:"2",question:"How are you?",options:["I am okay","I am fine","I am not fine"]},
    {q_id:"3",question:"Everything working fine?",options:[]},
  ])
  const [displayIndex,setDisplayIndex] = useState(0);
  const [answers,setAnswers] = useState(
  questions.map((question) => {return({q_id:question.options,answers:""})})
  )
  const handleQuizSubmit = () => {
    console.log(answers);
    navigate("/");
  }
  function RealQuizContainer() {
    return (
      <div className="startQuizMainContainer">
          <div className="startQuizSubContainer">
            <div className="startQuizHead">Question {displayIndex+1} </div>
            <div className="startQuizQuestion"> {questions[displayIndex].question} </div>
            {questions[displayIndex].options.length !== 0 && <div className='startQuizHead'> Options </div>}
            {
              questions[displayIndex].options.length !== 0 ?
                <div className="startQuizQuestionOptions">
                  {
                    questions[displayIndex].options.map((option,index) => {
                      return (
                        <div className="startQuizQuestionOptionItem" key={index}>
                            {option}
                        </div>
                      )
                    })
                  }
                </div> 
              :
                <input type="text" className='startQuizQuestionAnswerBox' placeholder='Enter your answer' />
            }
            <div className="startQuizNavigBtns">
              {displayIndex > 0 && <div className="startQuizBtnItem"
              onClick={() => {setDisplayIndex(displayIndex-1);}}> Back </div>}
              {displayIndex < questions.length-1 ? 
                  <div className="startQuizBtnItem"
                  onClick={() => {setDisplayIndex(displayIndex+1)}}> Next </div>
                : <div className="startQuizBtnItem" style={{backgroundColor:"blue",color:"white"}}
                onClick={() =>{handleQuizSubmit()}}> Submit </div>
              }
            </div>
          </div>
      </div>
    )
  }
  return (
    <div className='attemptQuizWrapper'>
        <Navbar />
        { startQuiz ? <RealQuizContainer /> : verifyPassword ? <QuizDisplay /> : <QuizPassword />}
    </div>
  )
}

export default AttemptQuiz