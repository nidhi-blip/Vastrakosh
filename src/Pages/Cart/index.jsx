import ProductImage from '../../assets/product/Tshirt.png';
import {Link} from "react-router-dom"
import { Checkout } from '../Checkout';


export function Cart(){
    return(
    <>
    <div className="container">
        <div className="row py-5">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#" className="bg-text ">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Sales</li>
                </ol>
            </nav>
        </div>
    </div>









    <div className="container">
        <div className="row">
            <div className="col-lg-8 border">


                <nav className="nav">
                    <a className="nav-link" aria-current="page" href="">Cart</a>
                    <a className="nav-link bg-orange" href="">Favourites</a>

                </nav>

                <div className="d-flex justify-content-end mb-2">
                    <button className="btn btn-outline-secondary">delete</button>
                </div>
                <div className="container">
                    <div className="">
                    <div className="row">

                        <div className="form-check col-lg-2">
                            <input className="form-check-input" type="checkbox" value="product" id="checkboxproduct"/>

                        </div>

                        <div className="col-lg-6">
                            <h5 >product</h5>

                        </div>
                        <div className="col-lg-2">
                            <h5>Quantity</h5>

                        </div>
                        <div className="col-lg-2 d-flex justify-content-end">
                            <h5>Price</h5>

                        </div>

                    </div>
                    <hr/>
                    <div className="row">
                       
                            <div className="form-check col-lg-2 d-flex align-items-center">
                                <input className="form-check-input" type="checkbox" value="product" id="checkboxproduct"/>

                            </div>
                            <div className="col-lg-6 d-flex ">
                                <div className="">
                                   <img src={ProductImage} height="100px"/>
                                </div>
                               <div>
                                <p>Camisloe</p>
                                <p>small</p>
                               </div>

                            </div>
                            <div className="col-lg-2">

                               <div className=" btn btn-outline-secondary mb-1 w-100">
                                <button className="btn count">+</button>
                                <button className="btn count">1</button>
                                <button className="btn count">-</button>
                               </div>
                               <div>

                                <button className="btn btn-outline-secondary w-100">delete</button>
                               </div>
                            </div>
                            <div className="col-lg-2 d-flex justify-content-end ">
                                <h5>$ 8.00</h5>

                            </div>
                       

                    </div>
                    <hr/>
                    <div className="row">
                       
                        <div className="form-check col-lg-2 d-flex align-items-center">
                            <input className="form-check-input" type="checkbox" value="product" id="checkboxproduct"/>

                        </div>
                        <div className="col-lg-6 d-flex ">
                            <div className="">
                               <img src={ProductImage} height="100px"/>
                            </div>
                           <div>
                            <p>Camisloe</p>
                            <p>small</p>
                           </div>

                        </div>
                        <div className="col-lg-2">

                           <div className=" btn btn-outline-secondary mb-1 w-100">
                            <button className="btn count">+</button>
                            <button className="btn count">1</button>
                            <button className="btn count">-</button>
                           </div>
                           <div>

                               <button className="btn btn-outline-secondary w-100">delete</button>
                           </div>
                        </div>
                        <div className="col-lg-2 d-flex justify-content-end ">
                            <h5>$ 8.00</h5>

                        </div>
                        
                       

                    </div>
                    <hr/>
                    <div className="row">
                       
                       <div className="form-check col-lg-2 d-flex align-items-center">
                           <input className="form-check-input" type="checkbox" value="product" id="checkboxproduct"/>

                       </div>
                       <div className="col-lg-6 d-flex ">
                           <div className="">
                              <img src={ProductImage} height="100px"/>
                           </div>
                          <div>
                           <p>Camisloe</p>
                           <p>small</p>
                          </div>

                       </div>
                       <div className="col-lg-2">

                          <div className=" btn btn-outline-secondary mb-1 w-100">
                           <button className="btn count">+</button>
                           <button className="btn count">1</button>
                           <button className="btn count">-</button>
                          </div>
                          <div>

                              <button className="btn btn-outline-secondary w-100">delete</button>
                          </div>
                       </div>
                       <div className="col-lg-2 d-flex justify-content-end ">
                           <h5>$ 8.00</h5>

                       </div>
                       
                      

                   </div>
                   
                </div>
                </div>
                    


            





            </div>
            <div className="col-lg-4 px-5 ">
                 <div className="shadow p-3 mb-5 bg-body rounded">
                <div className="d-flex justify-content-between">
                    <p>subtotal</p>
                    <p>$12</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between mb-3">
                    <p>Grandtotal</p>
                    <p>$12</p>
                </div>
                <Link className="btn bg-orange w-100" to="/Checkout">Checkout</Link>
              </div>
            </div>



        </div>

    </div>
    </>
    )
}