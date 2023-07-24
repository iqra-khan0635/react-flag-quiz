export default function QuestionOption(props) {
  const {
    options = "",
    onClick = () => {},
    currentAnswers = "",
    questionAttempted = false,
  } = props;

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {options.map((optionTitle, index) => (
          <div className="p-2" style={{ flex: "50%" }} key={index}>
            <button
              className={`w-100 p-2 btn ${
                questionAttempted
                  ? currentAnswers === optionTitle
                    ? `btn-success disabled`
                    : `btn-danger disabled`
                  : `btn-primary`
              }`}
              onClick={() => {
                onClick(optionTitle, currentAnswers);
              }}
            >
              {optionTitle}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
