export function Signup(){
    return(<>
    <div className="container py-5">
    <div className="customheight">
      <div className="row customheight shadow-lg">
        <div className="col-lg-6 ">
          <div className="row">

            <div className="text-center py-2">
              <img src="./assets/Home/icon.png" alt="logo" className="mb-2" height="90px"/>
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              
            </div>
          </div>

          <div className="container py-2 justify-content-center align-items-center ">
            <form>
              <div className="mb-3">

                <input type="text" className="form-control" id="email" placeholder="Enter your full name"/>
              </div>
              <div className="mb-3">

                <input type="number" className="form-control" id="email" placeholder="Enter your number"/>
              </div>
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
              <div className="mb-3">

                <div className="input-group">
                  <input type="password" className="form-control" id="password" placeholder="ReEnter your password"/>
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="bi bi-eye"></i>
                  </button>
                </div>
              </div>
              <div className="mb-2">
             
                <button className="btn btn-primary lg-btn w-100 bg-orange">Sing up</button>
              </div>

            </form>
          </div>
          <div className="row">

            <div className="text-center">
              Already have account <a href="#" className="text-decoration-none p-3">Login</a>
            </div>
          </div>
        </div>
        <div className=" col-lg-6 login-img customheight">


        </div>
      </div>
    </div>
  </div></>)
}