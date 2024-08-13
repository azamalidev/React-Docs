
import { Link } from 'react-router-dom';
import '../style/global.css';
import NavButton from '../conponents/NavButton'
function Header() {
  return (
    <div>
     <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">⚓ Hook</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/"><NavButton content={'useState'}/></Link></li>
        <li><Link to="/useffect"><NavButton content={'useEffect'}/></Link></li>
        <li><Link to="/redux"><NavButton content={'Redux'}/></Link></li>
        <li><Link to="/usereduce"><NavButton content={'useReduce'}/></Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Header;
