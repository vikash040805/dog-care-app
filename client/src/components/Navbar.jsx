function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo">
                🐾 PawPal
            </div>
            <div className="nav-links">
                <a href="#features">Features</a>
                <a href="#vets">Find a Vet</a>
                <a href="#about">About</a>
            </div>

            <div className="nav-buttons">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Get Started</button>
            </div>
        </nav>
    );

}
export default Navbar;