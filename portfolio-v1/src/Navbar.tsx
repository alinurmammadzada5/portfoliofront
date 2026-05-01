import logo from "./assets/allyzada_logo.png"

function Navbar(){
    return(
            <div className="nav">
                <div className="nav-components">
                    <img src={logo} alt="ally-logo" />
                </div>
            </div>
    );
}

export default Navbar;