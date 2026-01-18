import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {

    return(
      <header className="navbar">
        <nav className="navbar__container">
          <div className="navbar__section">
            <li className="navbar__logo"><Link to="/">JAKXEL CARREON</Link></li>
            </div>
          <div className="navbar__section">  
              <li className="navbar__link"><Link to="/posts">Posts</Link></li>
              <li className="navbar__link"><Link to="/repos">Repos</Link></li>    
              <li className="navbar__link"><Link to="/articles">Articles</Link></li>
              <li className="navbar__link"><Link to="/books">Books</Link></li>
              <li className="navbar__link"><Link to="/about">About</Link></li>
          </div>
            
        </nav>
      </header>
        
    );
}
export default Navbar;