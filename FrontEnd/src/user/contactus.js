import React from 'react';
import './contactus.css'; 
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing_page">
      <div className="responsive-container-block big-container">
        <img className="bg-img" id="iq5bf" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/clothes-bg.png" />
        <div className="responsive-container-block container">
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
            <div className="content-box">
              <p className="text-blk section-head">
                Lorem ipsum amet dolor
              </p>
              <p className="text-blk section-subhead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis volupta
              </p>
              <div className="icons-container">
                <a className="share-icon">
                  <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" />
                </a>
                <a className="share-icon">
                  <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" />
                </a>
                <a className="share-icon">
                  <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" />
                </a>
                <a className="share-icon">
                  <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one" id="i1zj">
            <form className="form-box">
              <div className="container-block form-wrapper">
                <p className="text-blk contactus-head">
                  <a className="link" href="">
                  </a>
                  Connect Us
                </p>
                <p className="text-blk contactus-subhead">
                  We will get back to you in 24 hours
                </p>
                <div className="responsive-container-block">
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-7">
                    <input className="input" id="ijowk-7" name="FirstName" placeholder="First Name" />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i1ro7">
                    <input className="input" id="indfi-5" name="Last Name" placeholder="Last Name" />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6 emial" id="ityct">
                    <input className="input" id="ipmgh-7" name="Email" placeholder="Email" />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <input className="input" id="imgis-6" name="PhoneNumber" placeholder="Phone Number" />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-7">
                    <textarea aria-placeholder="Type message here" className="textinput" id="i5vyy-7" placeholder="Type message here"></textarea>
                  </div>
                </div>
                <Link to='/home1'><button className="submit-btn">
                  Submit
                </button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

