export default function Question(props) {
  const {
    questionNumber = 0,
    questionDescription = "",
    questionImage = "",
  } = props;
  return (
    <div className="text-dark">
      <h5 className="mb-sm-5 d-inline-block">
        Q{questionNumber}. {questionDescription}
      </h5>
      {questionImage ? (
        <img
          src={questionImage}
          alt={questionImage}
          className="mx-auto d-block mb-4"
          style={{ width: "50%", height: "20%" }}
        />
      ) : null}
    </div>
  );
}
