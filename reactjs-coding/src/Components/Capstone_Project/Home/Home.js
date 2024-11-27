import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import "./Home.css";
import Footer from "../Footer/Footer";
import { FaChevronRight } from "react-icons/fa6";
import {
  MdOutlinePauseCircleFilled,
  MdOutlinePlayCircleFilled,
  MdOutlineSecurity,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FaRupeeSign } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";

import qualityImage from "../../../Assets/CapstoneProject/Quality.png";
import performanceImage from "../../../Assets/CapstoneProject/Performance.png";
import reliabilityImage from "../../../Assets/CapstoneProject/Reliability.png";
import Popup from "reactjs-popup";
import CartContext from "../Context/CartContext";

const apiConstantStatus = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "INPROGRESS",
  failure: "FAILURE",
};

const Home = () => {
  const [data, setData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.initial);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animationName, setAnimationName] = useState("");

  const value = useContext(CartContext);

  const videoRef = useRef(null);

  useEffect(() => {
    getProductItem();
  }, []);

  useEffect(() => {
    if (isHovered) {
      setAnimationName("paused");
    } else {
      setAnimationName("start");
    }
  }, [isHovered]);

  const getProductItem = async () => {
    setApiStatus(apiConstantStatus.inProgress);

    const url = "http://localhost:3000/productItems";
    const response = await axios.get(url);
    if (response.status === 200) {
      setData(response.data);
      setApiStatus(apiConstantStatus.success);
    } else {
      setApiStatus(apiConstantStatus.failure);
    }
  };

  const onClickPlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const homeIphoneVideoDetails = () => {
    return (
      <div className="iphone-video-container">
        <div className="heading-container">
          <h1 className="heading">iPhone</h1>
          <h1 className="design-heading">Designed to be loved.</h1>
        </div>
        <video
          ref={videoRef}
          autoPlay="autoPlay"
          controls={false}
          loop
          muted
          disablePictureInPicture
          controlsList="nofullscreen"
          className="video-container"
        >
          <source
            src="https://www.apple.com/105/media/ww/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/xlarge_2x.mp4"
            className="iphone-video"
          />
        </video>
        <div className="iphone-play-pause-icons-container">
          {isPaused ? (
            <button
              type="button"
              className="iphone-play-pause-icons"
              onClick={onClickPlayPause}
            >
              <MdOutlinePlayCircleFilled
                size={25}
                className="pause-icon"
                color="#fff"
              />
            </button>
          ) : (
            <button
              type="button"
              className="iphone-play-pause-icons"
              onClick={onClickPlayPause}
            >
              <MdOutlinePauseCircleFilled
                size={55}
                className="pause-icon"
                color="#fff"
              />
            </button>
          )}
          <div className="apple-product-home-iphone-btn-container">
            {/* <NavLink to="/products/18" className="text-decoration-none">
              <button
                type="button"
                className="btn btn-warning home-iphone-learn-more-btn"
              >
                Learn More
              </button>
            </NavLink> */}
            <Popup
              modal
              className="pop-up-content"
              trigger={
                <button
                  type="button"
                  title="Learn More"
                  className="btn btn-warning home-iphone-learn-more-btn"
                >
                  Learn More
                </button>
              }
            >
              {(close) => (
                <>
                  <div className="explore-popup-container">
                    <h1 className="explore-popup-heading">
                      <img
                        src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg?q=90"
                        alt="Apple"
                        className="apple-img"
                      />
                      iPhone 16 Pro
                    </h1>
                    <hr className="popup-hr" />
                    <h1 className="explore-specifications-heading">
                      Sepcification
                    </h1>
                    <ul className="explore-specifications-list-container">
                      <li className="explore-list-item">128 GB ROM</li>
                      <li className="explore-list-item">
                        16.0 cm (6.3 inch) Super Retina XDR Display
                      </li>
                      <li className="explore-list-item">
                        48MP + 48MP + 12MP | 12MP Front Camera
                      </li>
                      <li className="explore-list-item">
                        A18 Pro Chip, 6 Core Processor Processor
                      </li>
                      <li className="explore-list-item">
                        All Screen OLED Display
                      </li>
                    </ul>
                    <hr className="popup-hr" />
                    <button
                      type="button"
                      className="close-btn btn btn-secondary"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </Popup>
          </div>
        </div>
        {/* <div className="iphone-details-container">
          <h1 className="iphone-heading">iPhone 16 Pro</h1>
          <p className="iphone-desc">Built for Apple Intelligence.</p>
          <div className="apple-product-home-iphone-btn-container">
            <NavLink to="/products/19" className="text-decoration-none">
              <button
                type="button"
                className="btn btn-light home-iphone-learn-more-btn"
              >
                Learn More
              </button>
            </NavLink>
          </div>
        </div> */}
      </div>
    );
  };

  const homeLaptopDetails = () => {
    return (
      <div className="laptop-video-container">
        <div className="heading-container">
          <h1 className="heading">Mac</h1>
          <p className="design-heading laptop-design-heading">
            If you can dream it, Mac can do it.
          </p>
        </div>
        <div className="laptop-details-container">
          <h1 className="laptop-heading">MacBook Air</h1>
          <p className="laptop-desc">Supercharged by M3</p>
          <div className="apple-product-home-laptop-btn-container">
            {/* <NavLink to="/products/21" className="text-decoration-none">
              <button
                type="button"
                className="btn btn-secondary home-laptop-learn-more-btn"
              >
                Learn More
              </button>
            </NavLink> */}
            <Popup
              modal
              className="pop-up-content"
              trigger={
                <button
                  type="button"
                  title="Learn More"
                  className="btn btn-secondary home-laptop-learn-more-btn"
                >
                  Learn More
                </button>
              }
            >
              {(close) => (
                <>
                  <div className="explore-popup-container">
                    <h1 className="explore-popup-heading">
                      <img
                        src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg?q=90"
                        alt="Apple"
                        className="apple-img"
                      />
                      MacBook Air M3
                    </h1>
                    <hr className="popup-hr" />
                    <h1 className="explore-specifications-heading">
                      Sepcification
                    </h1>
                    <ul className="explore-specifications-list-container">
                      <li className="explore-list-item">512 GB SSD</li>
                      <li className="explore-list-item">
                        Stylish & Portable Thin and Light Laptop
                      </li>
                      <li className="explore-list-item">
                        15 Inch Liquid Retina display, LED-backlit Display with
                        IPS Technology, Resolution at 224 px per inch, 500 nits
                        Brightness
                      </li>
                      <li className="explore-list-item">
                        18.1 cm (15 Inch) Display
                      </li>
                      <li className="explore-list-item">
                        Light Laptop without Optical Disk Drive
                      </li>
                    </ul>
                    <hr className="popup-hr" />
                    <button
                      type="button"
                      className="close-btn btn btn-secondary"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </Popup>
          </div>
        </div>
      </div>
    );
  };

  const homeWatchDetails = () => {
    return (
      <div className="watch-product-container">
        <div className="heading-container">
          <h1 className="heading">Apple Watch</h1>
          <p className="design-heading laptop-design-heading">
            The ultimate device for a healthy life.
          </p>
        </div>
        <div className="watch-details-container">
          <img
            src="https://www.apple.com/v/home/br/images/logos/apple-watch-ultra-2/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large.png"
            alt="Watch Ultra 2"
            className="watch-product-img"
          />
          {/* <p className=""></p> */}
          <div className="apple-product-home-watch-btn-container">
            {/* <NavLink to="/products/33" className="text-decoration-none">
              <button type="button" className="btn btn-light home-watch-btn">
                Learn More
              </button>
            </NavLink> */}
            <Popup
              modal
              className="pop-up-content"
              trigger={
                <button
                  type="button"
                  title="Learn More"
                  className="btn btn-light home-watch-btn"
                >
                  Learn More
                </button>
              }
            >
              {(close) => (
                <>
                  <div className="explore-popup-container">
                    <h1 className="explore-popup-heading">
                      <img
                        src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg?q=90"
                        alt="Apple"
                        className="apple-img"
                      />
                      Apple Watch Ultra 2
                    </h1>
                    <hr className="popup-hr" />
                    <h1 className="explore-specifications-heading">
                      Sepcification
                    </h1>
                    <ul className="explore-specifications-list-container">
                      <li className="explore-list-item">
                        The most rugged and capable.
                      </li>
                      <li className="explore-list-item">With Call Function</li>
                      <li className="explore-list-item">Touchscreen</li>
                      <li className="explore-list-item">Fitness & Outdoor</li>
                      <li className="explore-list-item">
                        Battery Runtime: Upto 36 hrs
                      </li>
                    </ul>
                    <hr className="popup-hr" />
                    <button
                      type="button"
                      className="close-btn btn btn-secondary"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </Popup>
          </div>
        </div>
      </div>
    );
  };

  const homeAirPodsDetails = () => {
    return (
      <div className="airpods-product-container">
        <div className="heading-container">
          <h1 className="heading">AirPods</h1>
          <p className="design-heading airpods-design-heading">
            The feeling of sound is magical!
          </p>
        </div>
        <div className="airpods-details-container">
          <h1 className="airpods-heading">AirPods 4</h1>
          <p className="airpods-desc">
            Avialable with Active Noise Cancellation.
          </p>
          <div className="apple-product-home-airpods-btn-container">
            {/* <NavLink to="/products/45" className="text-decoration-none">
              <button type="button" className="btn btn-light home-airpods-btn">
                Learn More
              </button>
            </NavLink> */}
            <Popup
              modal
              className="pop-up-content"
              trigger={
                <button
                  type="button"
                  title="Learn More"
                  className="btn btn-light home-airpods-btn"
                >
                  Learn More
                </button>
              }
            >
              {(close) => (
                <>
                  <div className="explore-popup-container">
                    <h1 className="explore-popup-heading">
                      <img
                        src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg?q=90"
                        alt="Apple"
                        className="apple-img"
                      />
                      AirPods 4
                    </h1>
                    <hr className="popup-hr" />
                    <h1 className="explore-specifications-heading">
                      Sepcification
                    </h1>
                    <ul className="explore-specifications-list-container">
                      <li className="explore-list-item">512 GB SSD</li>
                      <li className="explore-list-item">
                        Stylish & Portable Thin and Light Laptop
                      </li>
                      <li className="explore-list-item">
                        15 Inch Liquid Retina display, LED-backlit Display with
                        IPS Technology, Resolution at 224 px per inch, 500 nits
                        Brightness
                      </li>
                      <li className="explore-list-item">
                        18.1 cm (15 Inch) Display
                      </li>
                      <li className="explore-list-item">
                        Light Laptop without Optical Disk Drive
                      </li>
                    </ul>
                    <hr className="popup-hr" />
                    <button
                      type="button"
                      className="close-btn btn btn-secondary"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </Popup>
          </div>
        </div>
      </div>
    );
  };

  const exploreAppleSuccessData = () => {
    return (
      <>
        {data.map((eachItem) => (
          <li
            className={`explore-iphone-card ${animationName}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <NavLink
              to={`/products/${eachItem.id}`}
              className="text-decoration-none explore-iphones-navlink"
            >
              <img
                src={eachItem.imageUrl}
                alt={eachItem.model}
                className="iphone-home-img"
              />
              <div className="w-100">
                <h1 className="explore-iphone-model-heading">
                  {eachItem.model}
                </h1>
                <p className="explore-iphone-price">
                  <span className="price-heading">Price: </span>
                  <FaRupeeSign color="#fff" className="rupee-icon" />
                  {eachItem.price}/-
                </p>
                <p className="explore-iphone-specification">
                  {eachItem.specifications[0].item}
                </p>
              </div>
            </NavLink>
          </li>
        ))}
      </>
    );
  };

  const AppleItemsLoading = () => {
    return (
      <div className="loading-container">
        <ThreeDots color="#3b82f6" height={50} width={50} />
      </div>
    );
  };

  const AppleProductFailure = () => {
    return (
      <div className="products-error-view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
          alt="products failure"
          className="products-failure-img"
        />
        <h1 className="product-failure-heading-text">
          Oops! Something Went Wrong
        </h1>
        <p className="products-failure-description">
          We are having some trouble processing your request. Please try again.
        </p>
      </div>
    );
  };

  const AppleProductItems = () => {
    switch (apiStatus) {
      case apiConstantStatus.success:
        return exploreAppleSuccessData();

      case apiConstantStatus.inProgress:
        return AppleItemsLoading();

      case apiConstantStatus.failure:
        return AppleProductFailure();

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-main-heading">Apple</h1>
        <hr className="home-hr" />
        <div className="apple-products-container">
          {homeIphoneVideoDetails()}
          <hr className="apple-products-hr" />
          {homeLaptopDetails()}
          {homeWatchDetails()}
          <hr className="apple-products-hr" />
          {homeAirPodsDetails()}
        </div>
        <div className="explore-iphones-container mt-3">
          <div className="explore-iphones-heading-container">
            <h1 className="explore-iphone-heading">Explore All Products</h1>
            <NavLink
              to="/products"
              className="text-decoration-none navLink-apple-product-models"
            >
              Check All Models
              <FaChevronRight size={11} className="chevron-icon" />
            </NavLink>
          </div>
          <div className="explore-products-container">
            <p className="explore-dark-left"></p>
            <ul className="explore-iphones-list-container">
              {AppleProductItems()}
            </ul>
            <p className="explore-dark-right"></p>
          </div>
          {/* <hr className="home-hr" /> */}
          <div className="why-choose-apple-products">
            <h1 className="wca-heading">Why Apple Products are Best?</h1>
            <ul className="wca-list-container">
              <li className="wca-list" title="Quality">
                <img src={qualityImage} alt="Quality" className="wca-img" />
                <h1 className="wca-heading">Quality</h1>
                <p className="wca-desc">
                  Apple products are renowned for their exceptional quality,
                  characterized by premium materials and meticulous
                  craftsmanship. Rigorous testing and quality control ensure
                  sonsistent performance and reliability across devices.
                </p>
              </li>
              <li className="wca-list" title="Performance">
                <img src={performanceImage} alt="Quality" className="wca-img" />
                <h1 className="wca-heading">Performance</h1>
                <p className="wca-desc">
                  Apple products and their exceptional performance, driven by
                  powerful processors and optimized software. The integration of
                  hardware and software ensures smooth multitasking and rapid
                  responsiveness, allowing user to handle demanding application
                  effortlessly.
                </p>
              </li>
              <li className="wca-list" title="Reliability">
                <img
                  src={reliabilityImage}
                  alt="Quality"
                  className="wca-img reliability-img"
                />
                <h1 className="wca-heading">Reliability</h1>
                <p className="wca-desc">
                  Apple Products are renowned for their reliability, often
                  featuring high-quality materials and precise engineering. User
                  apperciate the logevity of devices with many functioning well
                  for serveral years. The seamless integration of hardware and
                  software contributes to stable performance.
                </p>
              </li>
              <li className="wca-list" title="Security">
                <MdOutlineSecurity
                  size={100}
                  color="#fff"
                  className="security-img"
                />
                <h1 className="wca-heading">Security</h1>
                <p className="wca-desc">
                  Apple products prioritize user security through robust
                  ecosystem designed to protect personal data. Features like
                  end-to-end encryption, secure boot processes, and software
                  updates help safeguard against threats.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
