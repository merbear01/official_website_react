import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function NavBar() {
    const [currentPage, setCurrentPage] = useState("");

    return (
        <>
            <div className="container">
                {currentPage !== "aboutme" && (
                    <div className="nav-container aboutme">
                        <nav>
                            <Link to="/aboutme" onClick={() => setCurrentPage("aboutme")}>About me</Link>
                        </nav>
                    </div>
                )}
                {currentPage !== "myprojects" && (
                    <div className="nav-container myproject">
                        <nav>
                            <Link to="/myprojects" onClick={() => setCurrentPage("myprojects")}>My Projects</Link>
                        </nav>
                    </div>
                )}
                {(currentPage === "aboutme" || currentPage === "myprojects") && (
                    <div className="nav-container home">
                        <nav>
                            <Link to="/" onClick={() => setCurrentPage("")}>Home</Link>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
}

export default NavBar;