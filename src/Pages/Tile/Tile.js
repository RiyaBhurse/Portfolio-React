import "./Tile.css";
function Tile({ header, img, text, link,position,bgColor }) {
  return (
    
    <div className={`tile  ${position} ${bgColor}`}>
      <div className="img-parent">
        <img src={img}/>
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
  export default Tile;