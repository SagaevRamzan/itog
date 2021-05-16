import Logo from "./Logo/Logo.js";
import Menu from "./Menu.js";
import Checkout from "./Checkout/Checkout.js";


function Header() {
    return (
        <div className="header">
            <Logo/>
            <Menu/>
            <Checkout/>
        </div>
    );
}

export default Header;