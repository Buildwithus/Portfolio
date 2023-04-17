import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './navbar.css'
import IconImgage from '../images/leaf-icon-png-7050.png';
function Navbar(){
    return(
      <>
     <nav class="navbar   navbar-expand-lg navbar-light fixed-top ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> <img className='icconimg' src={IconImgage}></img></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav" >
            <a href="#home12"class="nav-link active text-center" aria-current="page"  >Home</a>
            <a class="nav-link active text-center" aria-current="page"  href="#about12">About</a>
            <a class="nav-link active text-center" aria-current="page"  href="#quali12">Education</a>
            <a class="nav-link active text-center" aria-current="page" href="#services12">Services</a>
            <a class="nav-link active text-center" aria-current="page" href="#skill12">Skills</a>
            <a class="nav-link active text-center" aria-current="page" href="#project12">Portfolio</a>
            <a class="nav-link active text-center" aria-current="page" href="#social12">Contact</a>
          </div>
        </div>
      </div>
    </nav>















      </>
      
    
    )
}
export default Navbar;


