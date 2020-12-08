import React from "react";
import "./index.css";

function Vendor() {
  const brands = [
    {
      id: 1,
      image: "images/instacart.png",
    },
    {
      id: 2,
      image: "images/kickstarter.png",
    },
    {
      id: 3,
      image: "images/lyft.png",
    },
    {
      id: 4,
      image: "images/shopify.png",
    },
    {
      id: 5,
      image: "images/pinterest.png",
    },
    {
      id: 6,
      image: "images/twitter.png",
    },
  ];

  const keyBenefits = [
    {
      id: 1,
      title: "Project Name",
      description:
        "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.",
      image: "images/Vendor_Marketing_Exposure.png",
      link: "",
    },
    {
      id: 2,
      title: "Project Name",
      description:
        "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.",
      image: "images/Vendor_Improved_SEO.png",
      link: "",
    },
    {
      id: 3,
      title: "Project Name",
      description:
        "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.",
      image: "images/Vendor_Marketing_Exposure.png",
      link: "",
    },
    {
      id: 4,
      title: "Project Name",
      description:
        "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.",
      image: "images/Vendor_Workflow_Efficiencies.png",
      link: "",
    },
  ];
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="bi bi-cloud-upload"
                  style={{ fontSize: "40px", marginBottom: "10px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                  ></path>
                </svg>
                <h4>Upload products</h4>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout.
                </p>
              </div>
              <div className="col-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="bi bi-shop-window"
                  style={{ fontSize: "40px", marginBottom: "10px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"
                  ></path>
                </svg>
                <h4>Publish products</h4>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout.
                </p>
              </div>
              <div className="col-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="bi bi-cloud-upload"
                  style={{ fontSize: "40px", marginBottom: "10px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                  ></path>
                </svg>
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
