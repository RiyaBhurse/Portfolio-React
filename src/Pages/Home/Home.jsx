import './Home.css';
import Typing from './Typing/Typing';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { SiLeetcode } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { BsTwitterX } from 'react-icons/bs';

function Home() {
    return (
        <div className="body">
            <div className="innerBody">
                <div className="insideDiv">
                    <h1 className="nameDiv">Riya Bhurse</h1>
                    <Typing
                        text={[
                            "I'm a Software Engineer",
                            "I'm passionate about DSA",
                            "I'm enjoying coding every day",
                            "I'm a dedicated programmer",
                            "I'm a Full Stack Developer"
                        ]}
                    />
                    <div className='socialM'>
                        <div className="icons" style={{color: "white"}}>
                            <a href='https://www.linkedin.com/in/riya-bhurse-2120781b7/'><BsLinkedin/></a>
                            <a href='https://github.com/RiyaBhurse?tab=repositories'><BsGithub/></a>
                            <a href="mailto:riyabhurse.rb@gmail.com"> <SiGmail/> </a>
                            <a href="https://leetcode.com/u/Riyaaa9/"><SiLeetcode/></a>
                            <a href="https://www.youtube.com/channel/UCV4F9Uc-l0NLZ9bC1PBY6kg"><BsYoutube/></a>
                            <a href="https://x.com/RiyaBhurse66653"><BsTwitterX/></a>
                        </div>
                    </div>    
                   
                </div>
                
            </div>
        </div>
    );
}
export default Home;