import { twMerge } from "tailwind-merge";

function App() {
  return (
    <div
      className={`bg-gray-100 h-screen flex flex-col items-center justify-center gap-y-14 px-10 ${twMerge(
        "lg:px-18",
        "lg:px-20"
      )}`}
    >
      <p className="text-6xl lg:text-8xl text-red-900 font-bold text-center">
        Quiz Project
      </p>
      <p className="text-red-200">something</p>
    </div>
  );
}

export default App;
