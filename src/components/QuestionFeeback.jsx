export default function QuestionFeedback(props) {
  const { result = false } = props;
  return (
    <div
      className={`alert ${result ? "alert-success" : "alert-danger"}`}
      role="alert"
    >
      {result
        ? "Hurrah!, Your selected option is correct"
        : "Ops!, Your selected option is incorrect"}
    </div>
  );
}
