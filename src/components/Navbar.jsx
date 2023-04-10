import "./Navbar.css";
function Navbar() {

    return (
        <nav className="navBar">
            <div className="navBar-list">
                <div className="navBar-nested">
                    <div className="navBar-list-item"><a className="navbar-hyper-item">Home</a></div>
                    <div className="navBar-list-item"><a className="navbar-hyper-item">Projects</a></div>
                </div>
                <div className="navBar-nested">
                    <div className="navBar-list-item"><a className="navbar-hyper-item">About</a></div>
                    <div className="navBar-list-item"><a className="navbar-hyper-item">Contact</a></div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;

