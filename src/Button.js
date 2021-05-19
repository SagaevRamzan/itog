import Card from "./Card";

function Button(props) {
   // props.sos(props.arr)
    let x=props.bought_1
    return (
        <div className="card-button">
            <button className="btn" onClick={x}>Добавить в корзину</button>
        </div>
    )
}

export default Button;