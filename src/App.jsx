import Mechanism from "./Components/Mechanism";
import Rules from "./Components/Rules";
import Score from "./Components/Score";
import { useState, useEffect } from "react";

const App = () => {
  const [score, setScore] = useState(
    () => Number(localStorage.getItem("score")) || 0
  );

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  return (
    <div className="flex flex-col items-center justify-center bg-blue-950 min-h-screen font-barlow md:h-screen">
      <Score score={score} />
      <Mechanism score={score} setScore={setScore} />
      <Rules />
    </div>
  );
};

export default App;
