import Card from "./Card";

function Button(props) {

    // function clik(item){
    //     props.arr.setD(props.arr[item])
    // }
    return (
        <div className="card-button">
            <button className="btn" onClick={props.setBought}>
                 "Добавить в корзину"
            </button>
        </div>
    )
}

export default Button;
