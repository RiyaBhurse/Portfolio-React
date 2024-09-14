import Tile from "./Tile/Tile";
import AiTeaching from "./Tile/AiTeaching.jpeg";
import TaskManager from "./Tile/taskManager.png";
import QuizApp from "./Tile/quizApp.jpg";
import Clock from "./Tile/clock.png";
import Portfolio from "./Tile/Portfolio.jpg";
import ScalerQuiz from "./Tile/image.png";
import './Project.css';
import ToDo from "./Tile/ToDo.png";
import ChatBot from "./Tile/ChatBot.png";
import WeatherApp from "./Tile/weatherApp.png";
function Project() {
  return (
    <div className="MainProject">
        <h1 className="Projects">Project</h1>
        <div className="TilesContainer">
            <Tile header={"Ai Teaching Assistant "} img={AiTeaching} text={"It would take all your doubts and help you in your studies"} link={"https://github.com/RiyaBhurse/AITeachingAssistan"} />
            <Tile header={"Chat Bot App"} img={ChatBot} text={"Chat bot will help you in your queries"} link={"https://github.com/RiyaBhurse/ChatBot"} />
            <Tile header={"todo App"} img={ToDo} text={"You can manage your task very effectively"} link={"https://to-do-list-alpha-drab.vercel.app/"} />
            <Tile header={"Scaler Quiz App"} img={ScalerQuiz} text={"You can play quiz and test your knowledge about Scaler"} link={"https://scaler-quiz-app.vercel.app/"}/>
            <Tile header={"Weather App"} img={WeatherApp} text={"You can check weather of any city"} link={"https://weather-app-two-umber-78.vercel.app/"} />
            <Tile header={"Task Manager"} img={TaskManager} text={"You can manage your task very effectively"} link={"https://riyabhurse.github.io/study-planner/"} />
            <Tile header={"Clock"} img={Clock} text={"You can check time"} link={"https://clock-jade-zeta.vercel.app/"} />
        </div>
    </div>
  );
}

export default Project;
