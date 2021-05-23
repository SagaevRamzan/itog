import Button from "./Button";
import Content from "./Content";
function Card(props) {

    return (<div className="card">

            <div className="card-image">
                <img src={props.product.image} alt=""/>
            </div>
            <div className="card-info">
                <div className="card-name">{props.product.name}</div>
                <div className="card-price">{props.product.price} ₽</div>
                <Button  id={props.product.id} bought={props.product.bought} setBought={props.setBought}/>
            </div>
        </div>
    )
}

export default Card;