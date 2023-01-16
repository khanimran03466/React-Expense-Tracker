import "./Card.css";

const Card = ({className, children}) => {

    const clases = className + " card";
    
    return ( 
        <div className={clases}> {children} </div>
     );
}
 
export default Card;