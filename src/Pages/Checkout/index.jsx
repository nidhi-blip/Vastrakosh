import tank from "../../assets/product/tank.png";
import visa from "../../assets/product/visa.png";
export function Checkout() {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" className="bg-text ">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" className="bg-text ">
                  Cart
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Checkout
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container px-5">
        <div className="row">
          <div className="col-md-7 col-lg-8 ">
            <div className="col-md-12">
              <label></label>
              <select
                className="form-select bg-orange w-100"
                id="region"
                defaultValue={{ label: "Select Dept", value: 0 }}
              >
                <option>Select Country</option>
                <option value="1">Region 1</option>
                <option value="2">Region 2</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid city.
              </div>
            </div>
            <hr className="my-4" />
            <h4 className="mb-3">Shipping address</h4>
            <form className="needs-validation" noValidate="">
              <div className="row g-3">
                <div className="col-sm-12">
                  <label htmlFor="firstName" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-6">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-6">
                  <label htmlFor="email" className="form-label">
                    {" "}
                    Cofirmation Email{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-lg-12">
                  <label htmlFor="phonenumber" className="form-label">
                    Phone number
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    id="phonenumber "
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    {" "}
                    home name & Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-lg-6">
                  <label htmlFor="country" className="form-label">
                    City
                  </label>
                  <select className="form-select" id="country" required="">
                    <option value="">Choose...</option>
                    <option>Indore</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid city.
                  </div>
                </div>

                <div className="col-md-6">
                  <label></label>
                  <select
                    className="form-select bg-orange"
                    id="region"
                    defaultValue={{ label: "Select Dept", value: 0 }}
                  >
                    <option>Select region</option>
                    <option value="1">Region 1</option>
                    <option value="2">Region 2</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid city.
                  </div>
                </div>

                <div className="col-lg-12">
                  <label htmlFor="zip" className="form-label">
                    Postal code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder="Enter your postal code"
                    required=""
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />
              <h4 className="mb-3">Shipping method</h4>
              <div className="container">
                <div className="row border">
                  <div className="input-group d-flex col-lg-8">
                    <div className="form-check mb-3 w-100">
                      <div className="d-flex justify-content-between">
                        <div>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="validationFormCheck1"
                          required
                        />

                        <label
                          className="form-check-label"
                          htmlFor="validationFormCheck1"
                        >
                          Check this checkbox
                          <br />
                          (7-30 business days)
                        </label>
                        </div>
                        <div>
                          <p>0</p>
                        </div>
                      </div>
                      <div className="invalid-feedback">
                        Example invalid feedback text
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info"
                />
                <label className="form-check-label" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>
              <div className="container">
                <div className="row border">
                  <div className="my-3">
                    <div className="form-check d-flex justify-content-between">
                      <div>
                        <input
                          id="credit"
                          name="paymentMethod"
                          type="radio"
                          className="form-check-input"
                          checked=""
                          required=""
                        />
                        <label className="form-check-label" htmlFor="credit">
                          Credit card
                        </label>
                      </div>
                      <div>
                        <img className="w-25px" src={visa} />
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-12">
                      <label htmlFor="cc-number" className="form-label">
                        card number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        placeholder=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <label htmlFor="cc-name" className="form-label">
                        Name on card
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        placeholder=""
                        required=""
                      />
                      <small className="text-muted">card Name</small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="cc-expiration" className="form-label">
                        Expiration
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-expiration"
                        placeholder=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="cc-cvv" className="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-cvv"
                        placeholder=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Security code required
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" container border my-3">
                <div className="form-check my-3">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked=""
                    required=""
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Paypal
                  </label>
                </div>
              </div>

              <hr className="my-4" />

              <div className="container">
                <div className="row">
                  <h4 className="mb-3">Billing address</h4>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="same-address"
                    />
                    <label className="form-check-label" htmlFor="same-address">
                      Shipping address is the same as my billing address
                    </label>
                  </div>
                  <div className="row g-3">
                    <div className="col-lg-12">
                      <label htmlFor="phonenumber" className="form-label">
                        Phone number
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        id="phonenumber "
                        placeholder=""
                        value=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        {" "}
                        home name & Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="country" className="form-label">
                        City
                      </label>
                      <select className="form-select" id="country" required="">
                        <option value="">Choose...</option>
                        <option>Indore</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid city.
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label></label>
                      <select
                        className="form-select bg-orange"
                        id="region"
                        defaultValue={{ label: "Select Dept", value: 0 }}
                      >
                        <option>Select region</option>
                        <option value="1">Region 1</option>
                        <option value="2">Region 2</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid city.
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="zip" className="form-label">
                        Postal code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder="Enter your postal code"
                        required=""
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <label></label>
                <select
                  className="form-select bg-orange w-100"
                  id="region"
                  defaultValue={{ label: "Select Dept", value: 0 }}
                >
                  <option>Select Country</option>
                  <option value="1">Region 1</option>
                  <option value="2">Region 2</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid city.
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 px-5 ">
            <div className="shadow p-4 mb-5 bg-body rounded">
              <div className="row  mb-3">
                <div className="mb-3">
                  <h4>Your order</h4>
                  <div className="d-flex justify-content-between mt-3">
                    <img src={tank} height="70px" />

                    <div>
                      <p className="mb-0">Cardigan</p>
                      <p className="text-muted">Small - 1 pc</p>
                    </div>
                    <p>$12.00</p>
                  </div>
                </div>
                <hr />
                <div className="mb-3">
                  <p>Discount Code</p>
                  <div className="d-flex">
                    <input
                      type="code"
                      className="form-control"
                      id="Discount"
                      placeholder="Add discount code"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Please enter your code
                    </div>
                    <button className="btn bg-orange ">Apply</button>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p>Subtotal</p>
                  <p>$12.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Discount</p>
                  <p>$0.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Shipment Cost</p>
                  <p>$0.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <p>Grand Total</p>
                  <p>$12.00</p>
                </div>
                <button className="btn bg-orange w-100 mt-3">Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
