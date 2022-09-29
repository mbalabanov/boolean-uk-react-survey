import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  return (
    <ul>
      {props.list.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
