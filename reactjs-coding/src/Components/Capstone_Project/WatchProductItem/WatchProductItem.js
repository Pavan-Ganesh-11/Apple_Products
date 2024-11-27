import React from "react";
import "./WatchProductItem.css";

const WatchProductItem = (props) => {
  const { productWatch } = props;
  const {
    general,
    productDetails,
    platformAndStorageFeatures,
    connectivityFeatures,
    cameraAndDisplayFeatures,
    fitnessAndWatchFunctions,
    audioAndVideoFeatures,
    dimensions,
    warrenty,
  } = productWatch;

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
        <h1 className="specification-name">Platform And Storage Features</h1>
        <table className="specification-details">
          {platformAndStorageFeatures.map((storageItems) => (
            <tr>
              <td className="specification-item-title">{storageItems.key}:</td>
              <td className="specification-item-value">{storageItems.value}</td>
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
        <h1 className="specification-name">Camera And Display Features</h1>
        <table className="specification-details">
          {cameraAndDisplayFeatures.map((cameraItems) => (
            <tr>
              <td className="specification-item-title">{cameraItems.key}:</td>
              <td className="specification-item-value">{cameraItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Fitness And Watch Functions</h1>
        <table className="specification-details">
          {fitnessAndWatchFunctions.map((fitnessItems) => (
            <tr>
              <td className="specification-item-title">{fitnessItems.key}:</td>
              <td className="specification-item-value">{fitnessItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Audio And Video Features</h1>
        <table className="specification-details">
          {audioAndVideoFeatures.map((audioItems) => (
            <tr>
              <td className="specification-item-title">{audioItems.key}:</td>
              <td className="specification-item-value">{audioItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Dimensions</h1>
        <table className="specification-details">
          {dimensions.map((dimensionItems) => (
            <tr>
              <td className="specification-item-title">{dimensionItems.key}:</td>
              <td className="specification-item-value">{dimensionItems.value}</td>
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

export default WatchProductItem;
