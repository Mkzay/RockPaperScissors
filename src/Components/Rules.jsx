import { useState } from "react";

const Rules = () => {
  const [openRules, setOpenRules] = useState(false);
  const handleOpenRules = () => {
    clickSound.play();
    setOpenRules(!openRules);
  };

  const clickSound = new Audio("/sounds/click.wav");

  return (
    <div className="flex items-center justify-center mt-10 md:mt-0">
      <div className="flex items-center justify-center relative bottom-5 md:absolute md:bottom-20 lg:right-10 lg:bottom-10">
        <div
          onClick={handleOpenRules}
          className="border border-white rounded-lg py-2 px-12 text-white tracking-widest"
        >
          <h2 className="text-xl font-semibold">RULES</h2>
        </div>
      </div>
      <div
        className={`${
          openRules ? "block" : "hidden"
        } absolute top-0 right-0 w-full h-full bg-white flex flex-col items-center justify-center gap-20 py-10`}
      >
        <h1 className="text-4xl font-bold text-darkText">RULES</h1>
        <img src="/image-rules.svg" alt="rules" />
        <button
          onClick={handleOpenRules}
          className="bg-white text-darkText font-semibold py-2 px-8 rounded-lg"
        >
          <img src="/icon-close.svg" alt="CLOSE" />
        </button>
      </div>
    </div>
  );
};

export default Rules;
