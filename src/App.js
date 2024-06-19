import './App.css';
import  NavBar  from './Pages/NavBar/NavBar';
import Home from './Pages/Home/Home';
import About from './Pages/ABOUT/About';
import pic from './Pages/ABOUT/pic.jpg';
import Skills from './Pages/Skills/skills';

function App() {
  return (
    <div className="App">
      <header> 
        <NavBar/>                      
      </header>
      <Home/>
      <About
        header={"About Riya Bhurse"}
        img={pic}
        text={(<>
          Hello Im Riya Bhurse born and brought up in Belgaum Karnataka,<br/> Currently Im doing Computer Science at Scaler School Of Technology, <br/> I enjoy building projects,<br/>  currently building an Humonoid, <br/> and I have built many more projects, do check my github.<br/>  Im also fond of DSA and Compitative Programming,<br/>  I have solved 200+ questions on leetcode.<br/>  Im fond of learning new technology,<br/>  and exploring the possiblites of AI/ML.<br/> 
        </>)}
        link={"https://www.scaler.com/"}
        position={"img-right"}
        bgColor={"red"}
      />
      <Skills/>
    </div>
  );
}

export default App;
