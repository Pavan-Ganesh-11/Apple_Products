import React from "react";
import "./MobileProductItem.css";

const MobileProductItem = (props) => {
  const { productMobile } = props;
  const {
    id,
    name,
    imageUrl,
    model,
    rating,
    price,
    availability,
    hightlights,
    general,
    display,
    OsAndProcessors,
    memoryAndStorage,
    cameraFeatures,
    callFeatures,
    connectionConnectivity,
    otherDetails,
    multiMediaFeatures,
    dimensions,
    warrenty,
  } = productMobile;
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
        <h1 className="specification-name">Display</h1>
        <table className="specification-details">
          {display.map((displayItems) => (
            <tr>
              <td className="specification-item-title">{displayItems.key}:</td>
              <td className="specification-item-value">{displayItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Os & Processor Features</h1>
        <table className="specification-details">
          {OsAndProcessors.map((osItems) => (
            <tr>
              <td className="specification-item-title">{osItems.key}:</td>
              <td className="specification-item-value">{osItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Memory & Storage Features</h1>
        <table className="specification-details">
          <tr>
            <td className="specification-item-title">
              {memoryAndStorage.key}:
            </td>
            <td className="specification-item-value">
              {memoryAndStorage.value}
            </td>
          </tr>
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
        <h1 className="specification-name">Call Features</h1>
        <table className="specification-details">
          <tr>
            <td className="specification-item-title">{callFeatures.key}:</td>
            <td className="specification-item-value">{callFeatures.value}</td>
          </tr>
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Connectivity Features</h1>
        <table className="specification-details">
          {connectionConnectivity.map((connectionItems) => (
            <tr>
              <td className="specification-item-title">
                {connectionItems.key}:
              </td>
              <td className="specification-item-value">
                {connectionItems.value}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Other Details</h1>
        <table className="specification-details">
          {otherDetails.map((otherItems) => (
            <tr>
              <td className="specification-item-title">{otherItems.key}:</td>
              <td className="specification-item-value">{otherItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Multimedia Features</h1>
        <table className="specification-details">
          {multiMediaFeatures.map((multiMediaItems) => (
            <tr>
              <td className="specification-item-title">
                {multiMediaItems.key}:
              </td>
              <td className="specification-item-value">
                {multiMediaItems.value}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Dimensions</h1>
        <table className="specification-details">
          {dimensions.map((dimensionItems) => (
            <tr>
              <td className="specification-item-title">
                {dimensionItems.key}:
              </td>
              <td className="specification-item-value">
                {dimensionItems.value}
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

export default MobileProductItem;
