import Button from "./Button";
import Content from "./Content";
function Card(props) {

    return (
        <div className="card">

            <div className="card-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="card-info">
                <div className="card-name">{props.name}</div>
                <div className="card-price">{props.price} ₽</div>
                <Button/>
            </div>
        </div>
    )
}

export default Card;