import Rules from "./Components/Rules";
import Score from "./Components/Score";
import Home from "./Page/Home";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-950 min-h-screen font-barlow md:h-screen">
      <Score />
      <Home />
      <Rules />
    </div>
  );
};

export default App;
