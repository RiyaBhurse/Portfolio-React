import './Home.css';
import Typing from '../Home/Typing/Typing';
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
                            "I'm full stack developer",
                        ]}
                        typingSpeed={100}
                        deletingSpeed={50}
                        duration={1000}
                    />     
                    {/* <p className="ImDIv"> Im a programmer</p> */}
                    {/* <div className="LinkDiv">
                        <div className="link">Linkedin</div>
                        <div className="link">GitHub</div>
                        <div className="link">Gmail</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
export default Home;