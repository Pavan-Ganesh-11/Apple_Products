import React from "react";
import "./IPadsProductItem.css";

const DesktopProductItem = (props) => {
  const { productIpads } = props;
  const {
    general,
    productDetails,
    batteryFeatures,
    businessFeatures,
    cameraFeatures,
    connectivityFeatures,
    displayFeatures,
    multiMediaFeatures,
    navigationFeatues,
    warrenty,
  } = productIpads;
  return (
    <>
      <div className="specification-details-container">
        <h1 className="specification-name">General</h1>
        <table className="specification-details">
          {general.map((eachGeneralItem) => (
            <tr>
              <td className="specification-item-title">
                {eachGeneralItem.key}:
              </td>
              <td className="specification-item-value">
                {eachGeneralItem.value}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Product Details</h1>
        <table className="specification-details">
          {productDetails.map((productItems) => (
            <tr>
              <td className="specification-item-title">{productItems.key}:</td>
              <td className="specification-item-value">{productItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Battery Features</h1>
        <table className="specification-details">
          {batteryFeatures.map((batteryItems) => (
            <tr>
              <td className="specification-item-title">{batteryItems.key}:</td>
              <td className="specification-item-value">{batteryItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Business Features</h1>
        <table className="specification-details">
          {businessFeatures.map((businessItems) => (
            <tr>
              <td className="specification-item-title">{businessItems.key}:</td>
              <td className="specification-item-value">
                {businessItems.value}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Camera Features</h1>
        <table className="specification-details">
          {cameraFeatures.map((cameraItems) => (
            <tr>
              <td className="specification-item-title">{cameraItems.key}:</td>
              <td className="specification-item-value">{cameraItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Connectivity Features</h1>
        <table className="specification-details">
          {connectivityFeatures.map((connectivityItems) => (
            <tr>
              <td className="specification-item-title">
                {connectivityItems.key}:
              </td>
              <td className="specification-item-value">
                {connectivityItems.value}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Display Features</h1>
        <table className="specification-details">
          {displayFeatures.map((displayItems) => (
            <tr>
              <td className="specification-item-title">{displayItems.key}:</td>
              <td className="specification-item-value">{displayItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Multimedia Features</h1>
        <table className="specification-details">
          {multiMediaFeatures.map((multimediaItems) => (
            <tr>
              <td className="specification-item-title">
                {multimediaItems.key}:
              </td>
              <td className="specification-item-value">
                {multimediaItems.value}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Navigation Features</h1>
        <table className="specification-details">
          {navigationFeatues.map((navigationItems) => (
            <tr>
              <td className="specification-item-title">
                {navigationItems.key}:
              </td>
              <td className="specification-item-value">
                {navigationItems.value}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Warranty</h1>
        <table className="specification-details">
          <tr>
            <td className="specification-item-title">Warrenty:</td>
            <td className="specification-item-value">{warrenty}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default DesktopProductItem;
