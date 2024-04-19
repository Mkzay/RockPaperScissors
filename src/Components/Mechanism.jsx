import { useState, useEffect } from "react";

const Mechanism = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["rock", "paper", "scissors"];

  const choiceImages = {
    paper: "/icon-paper.svg",
    scissors: "/icon-scissors.svg",
    rock: "/icon-rock.svg",
  };

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    setComputerChoice(randomChoice);
    return randomChoice;
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Tie";
    }

    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return "User";
    }

    if (
      (userChoice === "rock" && computerChoice === "paper") ||
      (userChoice === "scissors" && computerChoice === "rock") ||
      (userChoice === "paper" && computerChoice === "scissors")
    ) {
      return "Computer";
    }
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
  };

  useEffect(() => {
    if (userChoice) {
      const computerChoice = generateComputerChoice();
      const result = determineWinner(userChoice, computerChoice);
      setResult(result);
    }
  }, [userChoice]);

  return (
    <div className="flex flex-col items-center justify-center mt-36 w-full h-full md:mt-0 lg:mt-12">
      {userChoice ? (
        <>
          <div className="flex items-center justify-between gap-20 text-white font-semibold tracking-widest mt-20 mb-16">
            <div className="flex flex-col-reverse items-center gap-5">
              <h2>YOU PICKED</h2>
              <img
                className="relative py-5 px-6 bg-white rounded-full md:py-8 md:px-9"
                src={choiceImages[userChoice]}
                alt={userChoice}
              />
            </div>
            <div className="flex flex-col-reverse items-center gap-5">
              <h2>THE HOUSE PICKED</h2>
              <img
                className="relative py-5 px-6 bg-white rounded-full md:py-8 md:px-9"
                src={choiceImages[computerChoice]}
                alt={computerChoice}
              />
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-5">
            <h2 className="text-white font-bold text-6xl">
              {result === "User"
                ? "YOU WIN"
                : result === "Computer"
                ? "YOU LOSE"
                : "IT'S A TIE"}
            </h2>
            <button
              className="bg-white rounded-md py-3 px-20 font-semibold text-base tracking-wider text-darkText"
              onClick={() => setUserChoice(null)}
            >
              PLAY AGAIN
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center mt-24 w-72 md:w-96 h-80 bg-[url('/bg-triangle.svg')] bg-no-repeat bg-auto md:bg-contain">
          <div className="bg-gradient-to-r from-pG1 to-pG2 relative right-24 bottom-1 rounded-full p-4 md:p-6 md:top-8 md:right-40">
            <img
              className="relative py-4 px-5 bg-white rounded-full md:py-8 md:px-9"
              src="/icon-paper.svg"
              alt="Paper Icon"
              onClick={() => handleUserChoice("paper")}
            />
          </div>
          <div className="bg-gradient-to-r from-sG1 to-sG2 relative left-24 bottom-[8rem] rounded-full p-4 md:p-6 md:left-32 md:bottom-[8.8rem]">
            <img
              className="relative py-4 px-5  bg-white rounded-full md:py-8 md:px-9 "
              src="/icon-scissors.svg"
              alt="Scissors Icon"
              onClick={() => handleUserChoice("scissors")}
            />
          </div>
          <div className="bg-gradient-to-r from-rG1 to-rG2 relative bottom-14 left-3 rounded-full p-4 md:p-6 md:left-0 ">
            <img
              className="py-6 px-6 bg-white rounded-full md:p-9"
              src="/icon-rock.svg"
              alt="Rock Icon"
              onClick={() => handleUserChoice("rock")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mechanism;
