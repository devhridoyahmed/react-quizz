import Option from "./Option";

function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      {question.options.map((option) => (
        <Option option={option} key={option} />
      ))}
    </div>
  );
}


export default Question;
