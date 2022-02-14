import {Link} from 'react-router-dom'


function Navigation(props) {
    
    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
      <Link to="/home" className="navbar-brand">
      <img src="https://a.thumbs.redditmedia.com/f5GxaATVn5u-M6Nz5r6pNHcf8bpW7bLhjheBKv-BnS0.png" alt="" width="30" height="24" className="d-inline-block text-center"/> Belcher Index

    </Link>
    
  </div>
</nav>


<ul className="nav bg-dark bg-gradient justify-content-center">
  <li className="nav-item">
      <Link to="/characters" className="nav-link active text" aria-current="page">
          Characters
          </Link>
    
  </li>
  <li className="nav-item">
      <Link to="/exterminators"className="nav-link">Exterminators
      </Link>
    
  </li>
  <li className="nav-item"className="nav-link"> 
  What Character are You?
  </li>
</ul>

    
        </>
    )
}

export default Navigation