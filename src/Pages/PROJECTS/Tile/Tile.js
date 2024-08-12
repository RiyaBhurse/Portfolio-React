import './Tile.css';
function Tile({header, img, text, link}){
    return(
    <div className= "TileMain">
        <div className="imgParent">
            <img className="tileImage" src={img} alt="tile-img"/>
        </div>
        <h2 className='TileHead'>{header}</h2>
        <div className="tileText">
            {text}
        </div>
        <div className="link-parent">
            <a href={link} className="link"><button>Check out</button></a>
        </div>
    </div>
        
    );
}
export default Tile;