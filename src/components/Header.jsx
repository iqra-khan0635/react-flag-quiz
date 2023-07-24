import React from "react";

export default function Header(props) {
  const { title = "Flag Quiz", totalQuestion = 0, currentQuestion = 0 } = props;
  return (
    <div className="alert alert-info text-center">
      <h5>{title}</h5>
      <h6>
        Question No : <b>{currentQuestion}</b>/{totalQuestion}
      </h6>
    </div>
  );
}
