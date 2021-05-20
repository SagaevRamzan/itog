import Logo from "./Logo/Logo.js";
import Menu from "./Menu.js";
import Checkout from "./Checkout/Checkout.js";


function Header(props) {
    return (
        <div className="header">
            <Logo/>
            <Menu/>
            <Checkout arr={props.arr} setBought={props.setBought} new_database={props.new_database}/>
        </div>
    );
}

export default Header;