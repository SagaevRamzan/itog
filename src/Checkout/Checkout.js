import logo from "./shopping-cart-solid.svg"


function Checkout(props) {

    return (

        <>


            <div className="сheckout" >

                <a href="#"><img  src={logo} /></a>
                <span className="counter">0</span>
            </div>

            <a href="#" className="logout">
                выход
            </a>
        </>
    )
}

export default Checkout;
