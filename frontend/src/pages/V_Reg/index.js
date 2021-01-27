import React, { useState, useEffect } from "react";
import "./index.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  mainContacts,
  companyFields,
  officeFields,
  businessFields,
  requireFields,
  businessMarket,
  businessFulfillment,
  defaultOptions,
  roleOptions,
} from "../../utils/vendorRegFormData";
import axios from "axios";
import Geocode from "react-geocode";

function VendorReg() {
  const animatedComponents = makeAnimated();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      // Geocode.setApiKey("AIzaSyBptDAsJMkDkAfN6Z4poFTT7GcRrH6p_FU");
      // Geocode.setLanguage("en");
      // Geocode.setRegion("es");
      // Geocode.fromLatLng("37.09024", "-95.712891").then(
      //   (response) => {
      //     const address = response.results[0].formatted_address;
      //     console.log(address);
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
      // );
    } else {
      console.log("FAIL!!!");
    }
  }, []);
  //Get longitude and latitude using google api
  const showPosition = (position) => {
    let latitude = position.coords.latitude;
    console.log(latitude);
    let Longitude = position.coords.longitude;
    console.log(Longitude);
  };

  // become a vendor
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [role, setRole] = useState();
  const [isAuthorization, setIsAuthorization] = useState();
  //company background
  const [legalName, setLegalName] = useState();
  const [websiteUrl, setWebsiteUrl] = useState();
  const [privateLabel, setPrivateLabel] = useState();
  const [stateOfFormation, setStateOfFormation] = useState();
  // office detail
  const [addr1, setAddr1] = useState();
  const [addr2, setAddr2] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [zipcode, setZipcode] = useState();
  const [country, setCountry] = useState();
  // business detail
  const [whichMarket, setWhichMarket] = useState();
  const [fulfillmentCenter, setFulfillmentCenter] = useState();
  const [productCount, setProductCount] = useState();
  const [totalRevenue, setTotalRevenue] = useState();
  const [onlineSelling, setOnlineSelling] = useState();
  const [commercialProduct, setCommercialProduct] = useState();
  const [sellerType, setSellerType] = useState();
  const [howGetSite, setHowGetSite] = useState();
  const [note, setNote] = useState();
  // requirements
  const [dropship, setDropship] = useState();
  const [productInsurance, setProductInsurance] = useState();
  const [productCate, setProductCate] = useState();
  const [acceptReturn, setAcceptReturn] = useState();

  const handleClickSave = async () => {
    let vendorSaveData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: "test",
      phone_number: phoneNumber,
      role: role,
      is_authorization: isAuthorization && isAuthorization.value,
      company_legal_name: legalName,
      website_url: websiteUrl,
      private_label: privateLabel,
      state_of_formation: stateOfFormation,
      address_line1: addr1,
      address_line2: addr2,
      city: city,
      state: province,
      country: country,
      zip_code: zipcode,
      which_market: whichMarket,
      sel_fulfillment_countries: fulfillmentCenter,
      product_count: productCount,
      annual_total_revenue: totalRevenue,
      online_selling: onlineSelling,
      commercial_product: commercialProduct,
      seller_type: sellerType,
      how_got_site: howGetSite,
      note: note,
      dropship: dropship && dropship.value,
      product_liability_insurance: productInsurance && productInsurance.value,
      product_categories: productCate,
      accept_return: acceptReturn && acceptReturn.value,
    };
    let vendorRegApiUrl = "http://127.0.0.1:8000/api/vendors/";
    try {
      let response = await axios.post(vendorRegApiUrl, vendorSaveData);
      console.log(response.data);
      // window.location.href = "/thankyou";
    } catch (error) {
      console.log(error);
    }
  };

  const handleMainContactsChange = (value, id) => {
    if (id === 1) {
      setFirstName(value);
    } else if (id === 2) {
      setLastName(value);
    } else if (id === 3) {
      setEmail(value);
    } else {
      setPhoneNumber(value);
    }
  };

  const handleCompanyChange = (value, id) => {
    if (id === 1) {
      setLegalName(value);
    } else if (id === 2) {
      setWebsiteUrl(value);
    } else if (id === 3) {
      setPrivateLabel(value);
    } else {
      setStateOfFormation(value);
    }
  };

  const handleOfficeChange = (value, id) => {
    if (id === 1) {
      setCity(value);
    } else if (id === 2) {
      setProvince(value);
    } else {
      setZipcode(value);
    }
  };

  const handleBusinessChange = (value, id) => {
    if (id === 1) {
      setProductCount(value);
    } else if (id === 2) {
      setTotalRevenue(value);
    } else if (id === 3) {
      setOnlineSelling(value);
    } else if (id === 4) {
      setCommercialProduct(value);
    } else if (id === 5) {
      setSellerType(value);
    } else {
      setHowGetSite(value);
    }
  };
  const handleRequirementChange = (value, id) => {
    if (id === 1) {
      setDropship(value);
    } else if (id === 2) {
      setProductInsurance(value);
    } else if (id === 3) {
      setProductCate(value);
    } else {
      setAcceptReturn(value);
    }
  };
  return (
    <div className="vendor-register">
      <div className="container">
        <div className="vendor-reg-content">
          <h2>Become a Vendor</h2>
          <p>Thank you for your interest to join our sales network</p>
          <p>https://partners.wayfair.com/d/onboarding/registration</p>
        </div>

        <div className="main-contact">
          <div className="row">
            {mainContacts.map((mainContact) => {
              return (
                <div className="col-lg-6" key={mainContact.id}>
                  <div className="form-group">
                    <label htmlFor={`mainContact${mainContact.id}`}>{mainContact.label}</label>
                    <input
                      type={mainContact.type}
                      className="form-control"
                      id={`mainContact${mainContact.id}`}
                      onChange={(e) => handleMainContactsChange(e.target.value, mainContact.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row contact-role">
            <div className="col-lg-4">
              <label htmlFor="selectRole">Your Role *</label>
              <Select placeholder="Please Select an option" options={roleOptions} onChange={(e) => setRole(e)} />
            </div>
            <div className="col-lg-8">
              <label htmlFor="selectLegal">
                Are you authorized to sign legal agreements on behalf of the company *
              </label>
              <Select
                placeholder="Please select an answer"
                options={defaultOptions}
                onChange={(e) => setIsAuthorization(e)}
              />
            </div>
          </div>
        </div>

        <div className="register-company mt-4">
          <h2>Company</h2>
          <p>
            Please use the legal name and registered address for business operations. We'll keep your info confidential
            and secure.
          </p>

          <h4>Company Background</h4>
          <div className="row">
            {companyFields.map((companyField) => {
              return (
                <div className="col-lg-6" key={companyField.id}>
                  <div className="form-group">
                    <label htmlFor={`company${companyField.id}`}>{companyField.label}</label>
                    <input
                      type="text"
                      className="form-control"
                      id={`company${companyField.id}`}
                      onChange={(e) => handleCompanyChange(e.target.value, companyField.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <h4>Office Details</h4>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="officeAddress1">Address Line 1 *</label>
                <input
                  type="text"
                  className="form-control"
                  id="officeAddress1"
                  onChange={(e) => setAddr1(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="officeAddress2">Address Line 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="officeAddress2"
                  onChange={(e) => setAddr2(e.target.value)}
                />
              </div>
            </div>
            {officeFields.map((officeField) => {
              if (officeField.countries) {
                return (
                  <div className="col-lg-3" key={officeField.id}>
                    <div className="form-group">
                      <label htmlFor={`office${officeField.id}`}>{officeField.label}</label>
                      <Select placeholder="" options={officeField.countries} onChange={(e) => setCountry(e)} />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="col-lg-3" key={officeField.id}>
                    <div className="form-group">
                      <label htmlFor={`office${officeField.id}`}>{officeField.label}</label>
                      <input
                        type="text"
                        className="form-control"
                        id={`office${officeField.id}`}
                        onChange={(e) => handleOfficeChange(e.target.value, officeField.id)}
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <h4>Business Details</h4>
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group">
                <label htmlFor="businessMarket">In which markets do you sell? *</label>
                <Select
                  options={businessMarket}
                  placeholder="Select countries"
                  closeMenuOnSelect={false}
                  isMulti
                  components={animatedComponents}
                  onChange={(e) => setWhichMarket(e)}
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label htmlFor="businessFulfillment">
                  Select all the Countries where you have fulfillment centers in *
                </label>
                <Select
                  options={businessFulfillment}
                  placeholder="Select countries"
                  closeMenuOnSelect={false}
                  isMulti
                  components={animatedComponents}
                  onChange={(e) => setFulfillmentCenter(e)}
                />
              </div>
            </div>
            {businessFields.map((businessField) => {
              if (businessField.isMulti === 1) {
                return (
                  <div className="col-lg-6" key={businessField.id}>
                    <div className="form-group">
                      <label htmlFor={`business${businessField.id}`}>{businessField.label}</label>
                      <Select
                        options={businessField.options}
                        placeholder="Select an option"
                        closeMenuOnSelect={false}
                        isMulti
                        components={animatedComponents}
                        onChange={(e) => handleBusinessChange(e, businessField.id)}
                      />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="col-lg-6" key={businessField.id}>
                    <div className="form-group">
                      <label htmlFor={`business${businessField.id}`}>{businessField.label}</label>
                      <Select
                        options={businessField.options}
                        placeholder="Select an option"
                        onChange={(e) => handleBusinessChange(e, businessField.id)}
                      />
                    </div>
                  </div>
                );
              }
            })}
            <div className="col-lg-12">
              <div className="form-group">
                <label htmlFor="businessNotes">Notes</label>
                <textarea
                  className="form-control"
                  id="businessNotes"
                  rows="5"
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="requirement mt-4">
          <h2>Requirements</h2>
          <p>In order to sell with us, you'll need drop shipping capability, and have product liability insurance.</p>
          <div className="row">
            {requireFields.map((requireField) => {
              if (requireField.categories) {
                return (
                  <div className="col-lg-6" key={requireField.id}>
                    <div className="form-group">
                      <label htmlFor={`require${requireField.id}`}>{requireField.label}</label>
                      <Select
                        placeholder={requireField.placeholder}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        // defaultValue={[options[4], options[5]]}
                        isMulti
                        options={requireField.categories}
                        onChange={(e) => handleRequirementChange(e, requireField.id)}
                      />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="col-lg-6" key={requireField.id}>
                    <div className="form-group">
                      <label htmlFor={`require${requireField.id}`}>{requireField.label}</label>
                      <Select
                        placeholder={requireField.placeholder}
                        options={requireField.options}
                        onChange={(e) => handleRequirementChange(e, requireField.id)}
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <button type="button" className="btn btn-primary mb-5 btn-company-register" onClick={handleClickSave}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default VendorReg;
