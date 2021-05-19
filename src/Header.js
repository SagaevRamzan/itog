import Logo from "./Logo/Logo.js";
import Menu from "./Menu.js";
import Checkout from "./Checkout/Checkout.js";


function Header(props) {
    return (
        <div className="header">
            <Logo/>
            <Menu/>
            <Checkout base={props.arr} boug={props.setbought}/>
        </div>
    );
}

export default Header;