export function Forgetpassword(){
    return(<>
  <div className="container py-5">
        <div className="row shadow-lg">
            <div className="col-lg-6 p-5">
                
                <div className="text-center py-2">
                    <img  src="./assets/Home/icon.png" alt="logo" className="mb-2" height="90px"/>
                    <h3 >Forget Password</h3>
                </div>    
                    <div className="container  py-2 py-3 justify-content-center align-items-center shadow p-3 mb-5 bg-body rounded">
                        <form>
                            <div className="mb-3">
                              
                              <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                            </div>
                           
                            <div className="mb-2">
                           
                               <button className="btn btn-primary lg-btn w-100 bg-orange">send link</button>
                            </div>
                            
                        </form>
                   </div>
                  
                </div>
           
            <div className=" col-lg-6 login-img">
              

            </div>
        </div>
    </div></>)
}