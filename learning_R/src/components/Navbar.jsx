import {Link} from "react-router-dom";
import './Navbar.css';


function NavBar(){
    return (
        <nav>
            <Link to="/aboutme">About me</Link> | <Link to="/myprojects">My Projects</Link>
        </nav>
    )
}
export default NavBar;