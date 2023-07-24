export default function QuizResult(props) {
  const {
    totalQuestion = 0,
    correctAnswers = 0,
    wrongAnswers = 0,
    onClick = {},
  } = props;
  return (
    <>
      <div className="alert alert-info text-center">
        <h4>Quiz Result</h4>
      </div>
      <div className="rounded p-4 mb-2">
        <div className="d-flex text-dark">
          <h4 className="w-75">Total Questions : </h4>
          <h4>{totalQuestion}</h4>
        </div>
        <div className="d-flex text-success">
          <h4 className="w-75">Correct Questions : </h4>
          <h4>{correctAnswers}</h4>
        </div>

        <div className="d-flex text-danger">
          <h4 className="w-75">Incorrect Questions : </h4>
          <h4>{wrongAnswers}</h4>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary w-50" onClick={onClick}>
            Try again
          </button>
        </div>
      </div>
    </>
  );
}
