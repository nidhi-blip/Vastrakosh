import Instagram from '../../assets/follow us/Instagram.png'
import Snapchat from '../../assets/follow us/Snap.png'
import Facebook from '../../assets/follow us/facebook.png'


export function Footer(){
    return(<>
     <div className="container-fluid bg-product my-5">
        <div className="container ">

            <div className="row">
                <footer className="py-5">
                    <h1>OUTFIT</h1>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">


                        <div className="col-md-4">
                            <p className="col-md- mb-0 text-body-secondary">Discover your distinct look</p>
                            <p className=" mb-0 text-body-secondary">Fasioned with precision ,worn with confidence</p>
                        </div>


                        <ul className="nav col-md-4 justify-content-end">
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>

                        </ul>
                    </div>

                    <ul className="list-unstyled d-flex justify-content-end ">
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="#">
                                <img src={Facebook} alt="Facebook" width="24" height="24"/>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="#">
                                <img src={Instagram} alt="Instagram" width="24" height="24"/>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis " href="#">
                                <img src={Snapchat} alt="Twitter" width="24" height="24"/>
                            </a>
                        </li>
                    </ul>


                    <div className="d-flex py-4 my-4 border-top ">
                        <p className="col-lg-4">Privacy policy</p>

                        <p className="col-lg-4 text-center">© 2024 Company, Inc. All rights reserved</p>
                        <p className="justify-content-end">Terms and condition</p>

                    </div>


                </footer>
            </div>
        </div>
    </div>
</>)
}