import './skills.css';
import { SiPython } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { SiSpringboot } from 'react-icons/si';
import { BiMath } from 'react-icons/bi';
import {SiTreehouse} from 'react-icons/si';
import { DiRasberryPi } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { SiFirebase } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { FaFlask } from 'react-icons/fa';

function Skills(){
    return (
        <>
        <div className="Skills"> Skills 
        <div className='skillIcon'>
        I love to learn new things and experiment with new technologies.
        These are some of the major languages, technologies, tools and platforms I have worked with:
            <div className='innerIconSkill'><SiPython/> Python </div>
            <div className='innerIconSkill'><SiJavascript/> JavaScript </div>
            <div className='innerIconSkill'><SiReact/> React </div>
            <div className='innerIconSkill'><SiMysql/> MySql</div><br/>
            <div className='innerIconSkill'><SiCss3/> CSS </div>
            <div className='innerIconSkill'><SiHtml5/> Html </div>
            <div className='innerIconSkill'><DiJava/> Java </div>
            <div className='innerIconSkill'><SiSpringboot/> Springboot </div><br/>
            <div className='innerIconSkill'><BiMath/> OOP </div>
            <div className='innerIconSkill'><SiTreehouse/> DSA </div>
            <div className='innerIconSkill'><DiRasberryPi/> Raspberry Pi </div> 
            <div className='innerIconSkill'><DiMongodb/> MongoDB </div><br/>
            <div className='innerIconSkill'><SiFirebase/> Firebase </div>
            <div className='innerIconSkill'><SiExpress/> Express </div>
            <div className='innerIconSkill'><SiTailwindcss/> Tailwind CSS </div>          
            <div className='innerIconSkill'><DiNodejs/> NodeJs </div>
            <div className='innerIconSkill'><FaFlask/> Flask </div>
        </div>
        </div>
        </>
    )
}
export default Skills;