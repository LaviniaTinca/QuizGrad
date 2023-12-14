import { twMerge } from "tailwind-merge";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div
      className={` h-screen flex flex-col items-center justify-center gap-y-14 px-10 ${twMerge(
        "lg:px-18",
        "lg:px-20"
      )}`}
    >
      <h1 className="text-6xl lg:text-8xl text-qyellow font-bold text-center">
        Quiz Project
      </h1>
      <Button
        variant="type1"
        onClick={() => {
          alert("Welcome to our Quiz app!");
        }}
      >
        Welcome
      </Button>
      <Button
        variant="type2"
        onClick={() => {
          alert("Bienvenue donc notre quiz app!");
        }}
      >
        Bienvenue
      </Button>
    </div>
  );
}

export default App;
