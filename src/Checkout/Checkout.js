import logo from "./shopping-cart-solid.svg"


function Checkout(props) {

    // function setcount(props) {
    //
    //   const counter = props.arr.filter((item) => {
    //        if( item.bought === true)
    //
    //            return item
    //     })
    //
    //     return counter.length
    // }
        return (

            <>


                <div className="checkout">

                    <a href="#"><img src={logo}/></a>
                    <span className="counter">{props.new_database.length}</span>
                </div>

                <a href="#" className="logout">
                    выход
                </a>
            </>
        )

}
export default Checkout;
