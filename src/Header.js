import Logo from "./Logo/Logo.js";
import Menu from "./Menu.js";
import Checkout from "./Checkout/Checkout.js";


function Header(props) {
    return (
        <div className="header">
            <Logo/>
            <Menu/>
            <Checkout database={props.database} setBought={props.setBought} />
        </div>
    );
}

export default Header;