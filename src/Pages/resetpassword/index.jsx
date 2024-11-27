export function Resetpassword(){
    return(<>
      <div className="container py-5 ">
        <div className="row shadow-lg rounded-3 ">                             
            <div className="col-lg-6 p-5">
                <div className="text-center py-2">
                    <img  src="./assets/Home/icon.png" alt="logo" className="mb-2" height="90px"/>
                    <h3 >Reset Password</h3>
                </div>    
                    <div className="container border py-3 justify-content-center align-items-center shadow p-3 mb-5 bg-body rounded">
                        <form>
                           
                            <div className="mb-3">
                              
                              <div className="input-group">
                                <input type="password" className="form-control" id="password" placeholder="password"/>
                                <button className="btn btn-outline-secondary" type="button">
                                  <i className="bi bi-eye"></i>
                                </button>
                              </div>
                            </div>
                            <div className="mb-3">
                                
                                <div className="input-group">
                                  <input type="password" className="form-control" id="password" placeholder="Reset password"/>
                                  <button className="btn btn-outline-secondary" type="button">
                                    <i className="bi bi-eye"></i>
                                  </button>
                                </div>
                              </div>
                            <div className="mb-2">
                              
                               <button className="btn btn-primary lg-btn w-100 bg-orange">Confirm password</button>
                            </div>
                            
                        </form>
                   </div>
                  
                </div>
              
             
            <div className="col-lg-6 login-img">
             
             <img className="customheight" src="https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34862.jpg?t=st=1732119297~exp=1732122897~hmac=94dae4d5eea716cd244cb21e0401341cf5246c3a5e53b12cb33b844926452eee&w=740"/>
              </div>
            
        </div>
      </div></>)
}