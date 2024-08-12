import Tile from "./Tile/Tile";
import AiTeaching from "./Tile/AiTeaching.jpeg";
import TaskManager from "./Tile/taskManager.png";
import QuizApp from "./Tile/quizApp.jpg";
import Clock from "./Tile/clock.png";
import Portfolio from "./Tile/Portfolio.jpg";
import ScalerQuiz from "./Tile/image.png";
import './Project.css';

function Project() {
  return (
    <div className="MainProject">
        <h1 className="Projects">Project</h1>
        <div className="TilesContainer">
            <Tile header={"Scaler Quiz App"} img={ScalerQuiz} text={"You can play quiz and test your knowledge about Scaler"} link={"https://scaler-quiz-app.vercel.app/"}/>
            <Tile header={"Task Manager"} img={TaskManager} text={"You can manage your task very effectively"} link={"https://riyabhurse.github.io/study-planner/"} />
            <Tile header={"Clock"} img={Clock} text={"You can check time"} link={"https://clock-jade-zeta.vercel.app/"} />
            <Tile header={"Portfolio"} img={Portfolio} text={"You can check my portfolio"} link={"https://riyabhurseportfolio.vercel.app/"} />
            <Tile header={"Ai Teaching Assistant "} img={AiTeaching} text={"It would take all your doubts and help you in your studies"} link={"https://github.com/RiyaBhurse/AI-teaching-assistant"} />
            <Tile header={"Quiz App"} img={QuizApp} text={"You can play quiz and test your knowledge"} link={"https://github.com/RiyaBhurse/Quiz-app"} />
        </div>
    </div>
  );
}

export default Project;
