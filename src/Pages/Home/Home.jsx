import './Home.css';
import Typing from './Typing/Typing';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { SiLeetcode } from 'react-icons/si';

function Home() {
    return (
        <div className="body">
            <div className="innerBody">
                <div className="insideDiv">
                    <h1 className="nameDiv">Riya Bhurse</h1>
                    <Typing
                        text={[
                            "I'm a software engineer.",
                            "I'm Loving DSA",
                            "I'm enjoying coding",
                            "I'm a programmer",
                            "I'm full stack developer"
                        ]}
                                            
                    /> 
                    <div className='socialM'>
                        <div className="icons" style={{color: "white"}}>
                            <a href='https://www.linkedin.com/in/riya-bhurse-2120781b7/'><BsLinkedin/></a>
                            <a href='https://github.com/RiyaBhurse?tab=repositories'><BsGithub/></a>
                            <a href='mailto:riyabhurse.rb@gmail.com'> <SiGmail/> </a>
                            <a href='https://leetcode.com/u/Riyaaa9/'><SiLeetcode/></a>
                        </div>
                    </div>    
                   
                </div>
                
            </div>
        </div>
    );
}
export default Home;