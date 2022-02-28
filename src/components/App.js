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
    const updatedQuestion = question.filter((item) => item.id !== id);
      setQuestions(updatedQuestion);
  }
  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList 
      question={question} 
      handleDeleteItem={handleDeleteItem} 
      addQuestion={addQuestion}/>}
    </main>
  );
}

export default App;
