import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [question, setQuestions] = useState([])
  const api = "http://localhost:4000/questions"


  useEffect(()=>{
    fetch(api)
      .then((response) => response.json())
      .then((data) => setQuestions(data))
  }, [])
  
  function addQuestion(newQuestion){
    const updatedQuestion = [...question, newQuestion]
    setQuestions(updatedQuestion)
  }


  function handleDeleteItem(id){
    console.log(id)
    const updatedQuestion = question.filter((item) => item.id !== id);
      setQuestions(updatedQuestion);
  }
  
  function updateAnswer(id, answered){
    const updatedQuestion = question.map(question => {
      if (question.id === id){
        return {...question, answered}
      }else {
        return question
      }
    })
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion}/> : <QuestionList question={question} updateAnswer= {updateAnswer} handleDeleteItem={handleDeleteItem}/>}
    </main>
  );
}

export default App;
