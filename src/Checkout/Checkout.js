import logo from "./shopping-cart-solid.svg"


function Checkout(props) {
const counter=0;
    let id=props.boug
props.base.filter(()=>{
    if(props.base.bought==true)
    return (counter+1)
});



    return (

        <>


            <div className="checkout" >

                <a href="#"><img  src={logo} /></a>
                <span className="counter">{counter}</span>
            </div>

            <a href="#" className="logout">
                выход
            </a>
        </>
    )
}

export default Checkout;
