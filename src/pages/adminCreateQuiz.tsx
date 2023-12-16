// import FormQuiz from "@shadcn/components/createQuiz/formQuiz";

import QuizModal from "@shadcn/components/createQuiz/quizModal";
import { Button } from "@shadcn/components/ui/button";
import { useQuizModalContext } from "@shadcn/context/quizModalContext";

const AdminCreateQuiz = () => {
  const { selectedQuestions } = useQuizModalContext();
  const handleClick = () => {
    console.log("selected Questions for quiz: ", selectedQuestions);
  };

  return (
    <div>
      Create quiz page
      <div className=" items-left mb-2">
        <QuizModal />
        {/* TODO delete this button after you check the functionality of the modal */}
        <Button variant="outline" onClick={handleClick}>
          click for selected questions -&gt; check the console
        </Button>
      </div>
      <QuizModal />
    </div>
  );
};

export default AdminCreateQuiz;
