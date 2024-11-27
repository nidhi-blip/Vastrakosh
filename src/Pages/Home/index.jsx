import Slider from "react-slick";
import Tshirt from '../../assets/product/Tshirt.png'
import skate from '../../assets/follow us/skate.png'
export function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
  };
  const items = [
    {
      id: 1,
      title: "Denim Jacket",
      price: "$20",
      img: "src/assets/new arrivals/image (1).png",
    },
    {
      id: 2,
      title: "Shirt",
      price: "$10",
      img: "src/assets/new arrivals/image (2).png",
    },
    {
      id: 3,
      title: "Short",
      price: "$8",
      img: "src/assets/new arrivals/image (4).png",
    },
    {
      id: 4,
      title: "Camisol",
      price: "$20",
      img: "src/assets/new arrivals/image (4).png",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-3">
            <img className="hi" src="src/assets/Home/Design.png" />
          </div>

          <div className=" col-lg-6 py-5 my-5 text-center ">
            <h1 className="display-5 fw-bold mb-3">
              Originity you wear Everyday
            </h1>
            <div className="col-lg-6 mx-auto">
              <button
                type="button"
                className="btn btn-lg px-4 gap-3 bg-orange "
              >
                Shop Now
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Fresh Sales
              </button>
            </div>
          </div>

          <div className="col-lg-3 py-5">
            <img src="src/assets/Home/Featured Item.png" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src="src/assets/Home/Image (1).png" />
          </div>
          <div className="col-lg-4">
            <img src="src/assets/Home/Sitewide Sale.png" />
          </div>

          <div className="col-lg-4">
            <img src="src/assets/Home/Image (2).png" />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-product">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-50">
            <h1>Popular Cloth</h1>
          </div>
          <div className="row mt-5">
            
              <h1>New Arrivals</h1>
              <div id="promotional_slider">
                <div className="promotionalslider_wrapper">
                  <Slider {...settings}>
                    {items.map((item) => (
                      <div key={item.id} className="">
                        <div className="card">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="card-img-top"
                          />
                          <div className="card-body">
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <div className="py-2">
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                S
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                M
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                L
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                XL
                              </button>
                            </div>
                            <div className="d-flex justify-content-between">
                              <button className="btn bg-orange">
                                Add to Cart
                              </button>
                              <img
                                src="src/assets/Home/button.png"
                                alt="Button Icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            

            
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="row d-flex align-items-center py-2">
              <div className="col-lg-8 ">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  Where personality meets Fabric
                </h1>
                <p className="lead">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
              </div>
              <div className="col-lg-4 ">
                <img
                  src="src/assets/product/Image (5).png"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container light_blue">
        <div className="d-flex justify-content-between align-items-center w-50">
          <h1>New Arrivals</h1>
        </div>
        <div className="row mt-5">
        <div id="promotional_slider">
                <div className="promotionalslider_wrapper">
                <Slider {...settings}>
                    {items.map((item) => (
                      <div key={item.id} className="">
                        <div className="card">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="card-img-top"
                          />
                          <div className="card-body">
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <div className="py-2">
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                S
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                M
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                L
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                XL
                              </button>
                            </div>
                            <div className="d-flex justify-content-between">
                              <button className="btn bg-orange">
                                Add to Cart
                              </button>
                              <img
                                src="src/assets/Home/button.png"
                                alt="Button Icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
        </div>
      </div>

      <div className="container ">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="src/assets/new arrivals/Image (6).png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="400"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              intersection of confidence and conter
            </h1>
            <p className="lead">
              staying true to who you are in fashion involve embracing your
              quirks.It's about exculding an authencitythat is truly capativing
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-4">
        <h1 className="bold">FOLLOW US</h1>
        <button className="btn bg-orange">Follow us</button>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img src={skate} />
          </div>

          <div className="col-lg-3">
            <img src="src/assets/follow us/image (2).png" />
          </div>

          <div className="col-lg-3">
            <img src="src/assets/follow us/image-placeholder _- Change image here (1).png" />
          </div>
          <div className="col-lg-3">
            <img src="src/assets/follow us/image-placeholder _- Change image here (2).png" />
          </div>
        </div>
      </div>
    </>
  );
}
