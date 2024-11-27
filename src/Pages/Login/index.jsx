export function Login(){
    return(<>
    <div className="container py-5">
    <div className="row shadow-lg">
      <div className="col-lg-6 p-5">
        <div className="text-center py-2">
          <img src="./assets/Home/icon.png" alt="logo" className="mb-2" height="90px"/>
          <h3>Login into account</h3>
        </div>
        <div className="container  py-2  justify-content-center align-items-center shadow p-3 mb-3 bg-body rounded ">
          <form>
            <div className="mb-3">

              <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">

              <div className="input-group">
                <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
                <button className="btn btn-outline-secondary" type="button">
                  <i className="bi bi-eye"></i>
                </button>
              </div>
            </div>
            <div className="">
              <div className="d-flex justify-content-end mb-2">
              
                <a href="http://127.0.0.1:5500/online/forgetpassword.html" className="text-decoration-none">Forgot password?</a>
              </div>
                <button className="btn btn-primary lg-btn w-100 bg-orange">Login</button>
            </div>

          </form>
        </div>
        <div className="text-center">
          Don't have an account? <a href="#" className="text-decoration-none ">Signup</a>
        </div>
      </div>
     
      <div className=" col-lg-6 login-img">


      </div>
    </div>
  </div></>)
}