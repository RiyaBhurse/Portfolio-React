import "./About.css"
function About({ header, img, text}) {
  return (
    
    <div className={`About`}>
      <div className="img-parent">
        <img src={img} className="img"/>
      </div>
      <div className="text-parent">
        {header ? (<h2>{header}</h2>)  : ""}

        <div className="text">
          {text}
        </div>

      </div>

    </div>
    )
  }
  export default About;