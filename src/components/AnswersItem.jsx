// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

// This is the main component being exported from this file
export default function AnswersItem(dataItem) {
  return (
    <li>
      <article className="answer">
        <h3>{dataItem.answerItem.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{dataItem.answerItem.color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
        </p>
        <ul>
          {dataItem.answerItem.spendTime.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{dataItem.answerItem.review}</span>
        </p>
      </article>
    </li>
  );
}

/*

*/
