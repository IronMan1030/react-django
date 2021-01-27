import React from "react";
import { brands, keyBenefits } from "../../utils/vendorPageData";
import "./index.css";
import { UploadIcon1 } from "../../assets/icons/UploadIcon1";
import { ShopWindow } from "../../assets/icons/ShopWindow";

function Vendor() {
  return (
    <div className="vendor-section">
      <div className="banner" style={{ backgroundImage: "url(/images/banner.png)" }}>
        <div className="features">
          <h1>Dropshipping Features</h1>
          <p>
            Worldwide suppliers, vendors, and brands use Modalyst to connect with online retailers and increase their
            distribution into specialty stores around the world. Become a Modalyst supplier and see how fast your and
            grows.
          </p>
          <button type="button" className="btn btn-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="container step-section">
        <h2 className="pt-5 mb-5 text-center">What is Lorem Ipsum?</h2>
        <div className="d-flex justify-content-center video-row">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
          </p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe allowFullScreen="" frameBorder="0" src="https://www.youtube.com/embed/zzwRbKI2pn4"></iframe>
          </div>
        </div>

        <div className="vendor_signup_steps text-center mb-5">
          <div className="container">
            <h2 className="pt-5 mb-5 text-center">Start earning in 3 simple steps</h2>
            <div className="row">
              <div className="col-4">
                <UploadIcon1 />
                <h4>Upload products</h4>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout.
                </p>
              </div>
              <div className="col-4">
                <ShopWindow />
                <h4>Publish products</h4>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout.
                </p>
              </div>
              <div className="col-4">
                <UploadIcon1 />
                <h4>Fulfill orders</h4>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="keyBenefits-section">
          <div className="container">
            <div className="intro m-n1">
              <h2 className="mb-4">Key Benefits</h2>
              <p>
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut
                laoreet vitae.
              </p>
            </div>
            <div className="row">
              {keyBenefits.map((keyBenefit) => {
                return (
                  <div className="col-lg-6" key={keyBenefit.id}>
                    <div className="d-flex align-items-start p-5">
                      <div className="item-pic">
                        <a href={keyBenefit.link}>
                          <img className="img-fluid" src={keyBenefit.image} alt={`benefit${keyBenefit.id}`} />
                        </a>
                      </div>
                      <div className="pl-4">
                        <h4>Project Name</h4>
                        <p>
                          Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus
                          eu gravida.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="highlight-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h3>
                  <strong>Start now</strong>
                </h3>
                <p>
                  <em>
                    Expand your distribution channel and grow your business through thousands of trusted online stores.
                  </em>
                </p>
                <button className="btn btn-primary">register</button>
              </div>
              <div className="col-lg-4">
                <img className="device" src="images/warehouse-truck.png" width="240" alt="warehouse-truck" />
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-subscribe">
          <div className="container">
            <div>
              <h2 className="text-center mb-4">Subscribe for our Newsletter</h2>
              <p className="text-center mb-4">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut
                laoreet vitae.
              </p>
            </div>
            <form className="newsletter-form">
              <input className="" type="email" name="email" placeholder="Your Email" />
              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="brands">
          <a href="/">
            {brands.map((brand) => {
              return <img key={brand.id} src={brand.image} alt={`brand${brand.id}`} />;
            })}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Vendor;
