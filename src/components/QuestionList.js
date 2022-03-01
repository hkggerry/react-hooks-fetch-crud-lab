import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({question , handleDeleteItem, updateAnswer}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{question.map((question)=>(
        <QuestionItem key={question.id} question={question} handleDeleteItem={handleDeleteItem} updateAnswer={updateAnswer}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
