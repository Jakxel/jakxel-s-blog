import { Link } from "react-router-dom";
import "../styles/components/navbar.css"
function Navbar() {

    return(
        <div className="display">
        <nav>   
        <li id="name"><Link to="/" id="name">JAKXEL CARREON</Link></li>
      </nav>
      <nav>
        <ul>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/repos">Repos</Link></li>    
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/books">Books</Link></li>
     
        </ul>
        </nav>
        <nav>
          <li id="about"><Link to="/about" id="about">About</Link></li>
        </nav>
        </div>
    );
}
export default Navbar;