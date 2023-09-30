import React from "react";
import "../components/global.css";

const Marks = ({ scores, setScores }) => {
  // const [score, setScore] = useState(20); // Initialize the score with an initial value

  // Function to reset the score to its initial value
  const resetMarks = () => {
    window.location.reload();
    setScores(0); // Set the score to the default value (0 in this example)
  };

  return (
    <div className="reset-marks-div">
      <div className="reset">
        <h4 onClick={resetMarks}>RESET</h4>
        {/* <button onClick={resetMarks}>Reset Marks</button> Button to reset marks */}
      </div>
      <div className="score">
        <h1>{scores}</h1>
        <h4>score</h4>
      </div>
    </div>
  );
};

export default Marks;

