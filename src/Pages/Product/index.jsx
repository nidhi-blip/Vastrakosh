import jacket from '../../assets/product/jacket.png'
import shorts from '../../assets/product/shorts.png'
import tank from '../../assets/product/tank.png'
import Tshirt from '../../assets/product/Tshirt.png'
import button from '../../assets/Home/button.png'






export function Product(){
    return(<>
   <div className="container">
        <div className="row py-5">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#" className="bg-text ">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Products</li>
                </ol>
            </nav>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="accordion accordion-flush" id="accordionCategory">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingCategories">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCategories" aria-expanded="false" aria-controls="collapseCategories">
                                Categories
                            </button>
                        </h2>
                        <div id="collapseCategories" className="accordion-collapse collapse" aria-labelledby="headingCategories" data-bs-parent="#accordionCategory">
                            <div className="accordion-body">
                               
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingMen">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMen" aria-expanded="false" aria-controls="collapseMen">
                                            Men
                                        </button>
                                    </h2>
                                    <div id="collapseMen" className="accordion-collapse collapse" aria-labelledby="headingMen" data-bs-parent="#collapseCategories">
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Shirt" id="checkboxShirt"/>
                                                <label className="form-check-label" for="checkboxShirt">Shirt</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Pant" id="checkboxPant"/>
                                                <label className="form-check-label" for="checkboxPant">Pant</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingWomen">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWomen" aria-expanded="false" aria-controls="collapseWomen">
                                            Women
                                        </button>
                                    </h2>
                                    <div id="collapseWomen" className="accordion-collapse collapse" aria-labelledby="headingWomen" data-bs-parent="#collapseCategories">
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Skirt" id="checkboxSkirt"/>
                                                <label className="form-check-label" for="checkboxSkirt">Skirt</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Tshirt" id="checkboxTshirt"/>
                                                <label className="form-check-label" for="checkboxTshirt">T-shirt</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-9">
                <div className="container">
                    <div className="row">
                        <h5>Showing 9 results from total 50 for "shirts"</h5>

                        <p>applied filters</p>

                    </div>
                    <div className="row  ">
                        <div className="col-lg-4">
                            <div className="card">
                                <img src ={jacket} className="card-img-top" alt="Clothing Item 1"/>
                                <div className="card-body ">
                                    <p>Denim jacket</p>
                                    <p>$20</p>
                                    <div className="py-2">
                                        <button type="button" className="btn btn-outline-secondary">S</button>
                                        <button type="button" className="btn btn-outline-secondary">M</button>
                                        <button type="button" className="btn btn-outline-secondary">L</button>
                                        <button type="button" className="btn btn-outline-secondary">XL</button>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn bg-orange">Add to Cart</button>
                                        <img src={button}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img src ={jacket} className="card-img-top" alt="Clothing Item 1"/>
                                <div className="card-body ">
                                    <p>Denim jacket</p>
                                    <p>$20</p>
                                    <div className="py-2">
                                        <button type="button" className="btn btn-outline-secondary">S</button>
                                        <button type="button" className="btn btn-outline-secondary">M</button>
                                        <button type="button" className="btn btn-outline-secondary">L</button>
                                        <button type="button" className="btn btn-outline-secondary">XL</button>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn bg-orange">Add to Cart</button>
                                        <img src={button}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img src ={jacket} className="card-img-top" alt="Clothing Item 1"/>
                                <div className="card-body ">
                                    <p>Denim jacket</p>
                                    <p>$20</p>
                                    <div className="py-2">
                                        <button type="button" className="btn btn-outline-secondary">S</button>
                                        <button type="button" className="btn btn-outline-secondary">M</button>
                                        <button type="button" className="btn btn-outline-secondary">L</button>
                                        <button type="button" className="btn btn-outline-secondary">XL</button>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn bg-orange">Add to Cart</button>
                                        <img src={button}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img src ={jacket} className="card-img-top" alt="Clothing Item 1"/>
                                <div className="card-body ">
                                    <p>Denim jacket</p>
                                    <p>$20</p>
                                    <div className="py-2">
                                        <button type="button" className="btn btn-outline-secondary">S</button>
                                        <button type="button" className="btn btn-outline-secondary">M</button>
                                        <button type="button" className="btn btn-outline-secondary">L</button>
                                        <button type="button" className="btn btn-outline-secondary">XL</button>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn bg-orange">Add to Cart</button>
                                        <img src={button}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img src ={jacket} className="card-img-top" alt="Clothing Item 1"/>
                                <div className="card-body ">
                                    <p>Denim jacket</p>
                                    <p>$20</p>
                                    <div className="py-2">
                                        <button type="button" className="btn btn-outline-secondary">S</button>
                                        <button type="button" className="btn btn-outline-secondary">M</button>
                                        <button type="button" className="btn btn-outline-secondary">L</button>
                                        <button type="button" className="btn btn-outline-secondary">XL</button>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn bg-orange">Add to Cart</button>
                                        <img src={button}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img src ={jacket} className="card-img-top" alt="Clothing Item 1"/>
                                <div className="card-body ">
                                    <p>Denim jacket</p>
                                    <p>$20</p>
                                    <div className="py-2">
                                        <button type="button" className="btn btn-outline-secondary">S</button>
                                        <button type="button" className="btn btn-outline-secondary">M</button>
                                        <button type="button" className="btn btn-outline-secondary">L</button>
                                        <button type="button" className="btn btn-outline-secondary">XL</button>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn bg-orange">Add to Cart</button>
                                        <img src={button}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img src ={jacket} className="card-img-top" alt="Clothing Item 1"/>
                                <div className="card-body ">
                                    <p>Denim jacket</p>
                                    <p>$20</p>
                                    <div className="py-2">
                                        <button type="button" className="btn btn-outline-secondary">S</button>
                                        <button type="button" className="btn btn-outline-secondary">M</button>
                                        <button type="button" className="btn btn-outline-secondary">L</button>
                                        <button type="button" className="btn btn-outline-secondary">XL</button>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn bg-orange">Add to Cart</button>
                                        <img src={button}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img src ={jacket} className="card-img-top" alt="Clothing Item 1"/>
                                <div className="card-body ">
                                    <p>Denim jacket</p>
                                    <p>$20</p>
                                    <div className="py-2">
                                        <button type="button" className="btn btn-outline-secondary">S</button>
                                        <button type="button" className="btn btn-outline-secondary">M</button>
                                        <button type="button" className="btn btn-outline-secondary">L</button>
                                        <button type="button" className="btn btn-outline-secondary">XL</button>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn bg-orange">Add to Cart</button>
                                        <img src={button}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img src ={jacket} className="card-img-top" alt="Clothing Item 1"/>
                                <div className="card-body ">
                                    <p>Denim jacket</p>
                                    <p>$20</p>
                                    <div className="py-2">
                                        <button type="button" className="btn btn-outline-secondary">S</button>
                                        <button type="button" className="btn btn-outline-secondary">M</button>
                                        <button type="button" className="btn btn-outline-secondary">L</button>
                                        <button type="button" className="btn btn-outline-secondary">XL</button>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn bg-orange">Add to Cart</button>
                                        <img src={button}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div></>)
}