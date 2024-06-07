import "./About.css";
function About({ header, img, text, link,position,bgColor }) {
  return (
    
    <div className={`About  ${position} ${bgColor}`}>
      
      <div className="text-parent">
        {header ? (<h2>{header}</h2>)  : ""}

        <div className="text">
          {text}
        </div>

      </div>
      <div className="img-parent">
        <img src={img}/>
      </div>

    </div>
    )
  }
  export default About;