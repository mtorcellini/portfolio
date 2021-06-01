import {Link, useLocation} from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Brand</Link>

        <Link role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" 
          onClick={() => {
              document.querySelector('#navMenu').classList.toggle('is-active');
              document.querySelector('.navbar-burger').classList.toggle('is-active');
            }
          }>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
        
      </div>

      <div id="navMenu" className="navbar-menu">

        <div className="navbar-start">
          <Link to="/" className="navbar-item">About</Link>
          <Link to="/projects" className="navbar-item">Projects</Link>
        </div>

        <div className="navbar-end">
        </div>

      </div>
    </nav>

  )
}

export default Nav;