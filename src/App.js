import './App.css';
import  NavBar  from './Pages/NavBar/NavBar';
import Home from './Pages/Home/Home';
import About from './Pages/ABOUT/About';

function App() {
  return (
    <div className="App">
      <header> 
        <NavBar/>                      
      </header>
      <Home/>
      {/* <h1>Hello</h1> */}
      <About
        header={"About Riya Bhurse"}
        img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
        text={"I'm Riya, born and raised in Belgaum, the smart city of Karnataka. As a child I was always a last bencher. My childhood was filled with mischief and stubbornness, earning me a reputation as one of the naughtiest students alongside two close friends. We thrived on laughter and pranks, challenging authority with every opportunity🤭 Beyond academics, my school days were enriched with a passion for sports.I played volleyball, throwball, basketball, cricket, and table tennis at the district level. These experiences taught me invaluable lessons in teamwork and perseverance.Academically, my journey was marked by a consistent affinity for math and science. The result was a remarkable 92% in 10th Boards with 96 in MATH and 96 in SCIENCE.Entering the 11th grade, life was a joyous ride of laughter with friends.😌. Later I applied to various entrance exams, including ScalerNSET, a game-changer introduced to me by my sister. Skepticism turned into determination, leading to a series of failures and eventual success🏆. Joining Scaler was a mix of joy and sadness because leaving my family, my friends was a not easy thing for me.Despite initial challenges and occasional tears, I grew resilient. Now, as I brace myself to compete with 191 amazingly talented individuals, I also participated in hackthons and online contests, I am both nervous and determined to give my best. I'm here at Scaler, aiming to turn seemingly impossible dreams into reality💫Join me on this journey of resilience, growth, and chasing dreams.💪I'm Riya, and I'm ready for whatever comes my way.thankyou universe for all the power 🙏"}
        link={"https://www.scaler.com/"}
        position={"img-right"}
        bgColor={"red"}
      />
    </div>
  );
}

export default App;
