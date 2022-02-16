import {Link} from 'react-router-dom'
import "./Nav.css"


function Navigation(props) {
    
    return (
        <>
        <nav className="navbar navbar-light">
        <div className="container-fluid">
      <Link to="/home" className="navbar-brand">
      
      <img src="https://fontmeme.com/permalink/220216/35ae46a0faf484314bf9ce88a61f3374.png" alt="bobs-burgers-tv-show-font" border="0" style={{
        paddingLeft:"25px",
        paddingBottom: "65px"}}/>
    </Link>
    
  </div>
</nav>


<ul className="nav bg-dark bg-gradient p-2 bg-opacity-85  justify-content-center">
<li className="nav-item">
      <Link to="/home"className="nav-link"><img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-burger-baking-and-bakery-icongeek26-flat-icongeek26.png" alt="" width="45" height="35" style={{
        paddingRight:"15px"}} className="d-inline-block text-center"/>
      </Link>
    
  </li>

  <li className="nav-item">
      <Link to="/characters" className="nav-link" aria-current="page">
          Characters
          </Link>
    
  </li>
  <li className="nav-item">
      <Link to="/exterminators"className="nav-link">Exterminators
      </Link>
    
  </li>
  <li className="nav-item"className="nav-link">
    <a href="https://screenrant.com/which-bobs-burgers-character-are-you-based-on-zodiac/">
  Which Character are You?
  </a>
  </li>
</ul>

    
        </>
    )
}

export default Navigation