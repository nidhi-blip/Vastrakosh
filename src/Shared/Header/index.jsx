import {Link} from "react-router-dom"
import cart from '../../assets/Home/cart.png'
import logo from '../../assets/Home/icon.png'

export function Header(){
    return(<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
           
        <img  src={logo} alt="logo" className="mb-2" height="40px" width="60"/>
        <a className="navbar-brand" href="#">Vastrakosh</a>

    
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Product">Product</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Sale">Sale</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  active" to="/Cart">Cart <img className="w-25px" src= {cart}/></Link>
                    </li>
                </ul>
        
        
    
    
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn bg-orange" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>



  </>)
}