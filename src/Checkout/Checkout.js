import logo from "./shopping-cart-solid.svg"
import {useState} from "react";


function Checkout(props) {

const  arrLenght=props.database.filter((item)=>{
    if(item.bought===true){return item}
})


        return (
            <>
                <div className="checkout">

                    <a href="#"><img src={logo}/></a>
                    <span className="counter">{arrLenght.length}</span>
                </div>

                <a href="#" className="logout">
                    выход
                </a>
            </>
        )

}
export default Checkout;
