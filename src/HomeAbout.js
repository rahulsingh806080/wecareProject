import React from "react";
import web from "../src/images/logo.jpeg";
import absa from "../src/images/absa.png";
import masa3 from "../src/images/masa3.png";
import shape1 from "../src/images/shape-1.png";
import websa12 from "../src/images/websa12.jpg";

const HomeAbout = (props) => {
  return (
    <>
      <section className="about-section">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(./src/images/shape/shape.png" }}
        ></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div id="image_block_one">
                <div className="image-box">
                  <div
                    className="pattern-layer"
                    style={{ backgroundImage: `url(${shape1})` }}
                  ></div>
                  <figure className="image image-1">
                    <img src={absa} alt="" />
                  </figure>
                  <figure className="image image-1">
                    <img src={absa} alt="" />
                  </figure>
                  <figure className="image image-3">
                    <img
                      style={{ marginLeft: 130 }}
                      src={masa3}
                      alt=""
                      className="rotate-me"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div id="content_block_one">
                <div className="content-box">
                  <div className="sec-title">
                    <h6>
                      <i className="flaticon-roof-1"></i>Welcome to Wecare
                    </h6>
                  </div>
                  <div className="text">
                    <p>
                      ..the home of real cleaner. We have been working to make
                      your work place beautiful, clean and healthy.{" "}
                    </p>
                  </div>
                  <div className="sec-title">
                    <h6>
                      <i className="flaticon-roof-1"></i>Our Vision
                    </h6>
                  </div>
                  <div className="text">
                    <p>
                      WEcare wants to be trusted partner of millions of families
                      across the globe...
                    </p>
                  </div>
                  <div className="sec-title">
                    <h6>
                      <i className="flaticon-roof-1"></i>Covid19 Response
                    </h6>
                  </div>
                  <div className="text">
                    <p>
                      WEcare protect you against harmful germs , viruses and
                      bacterias{" "}
                    </p>
                  </div>
                  <div className="sec-title">
                    <h6>
                      <i className="flaticon-roof-1"></i>Our social Resonsibilty
                    </h6>
                  </div>
                  <div className="text">
                    <p>
                      WEcare spread awareness about health hygiene in
                      school,public places.{" "}
                    </p>
                  </div>
                  <div className="area-code"></div>
                  <h4>
                    or make a call to <a href="tel:18005556677">9860223623</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
