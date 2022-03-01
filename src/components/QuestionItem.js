import React from "react";

function QuestionItem({ question, handleDeleteItem, updateAnswer}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(()=> handleDeleteItem(question))
  }

  function handleAnswer(answers){
    console.log(answers)
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({"correctIndex": parseInt(correctIndex)})
    })
      .then(r => r.json())
      .then(data => updateAnswer(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
