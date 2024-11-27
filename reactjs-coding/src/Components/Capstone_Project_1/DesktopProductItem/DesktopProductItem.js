import React from "react";
import "./DesktopProductItem.css";

const DesktopProductItem = (props) => {
  const { productLaptop } = props;
  const {
    salesPackage,
    general,
    systemFeatures,
    memory,
    display,
    graphics,
    webcam,
    storage,
    audio,
    power,
    connectivity,
    network,
    inputDevices,
    dimensions,
    additionalIncludedSoftware,
    warrenty,
  } = productLaptop;
  return (
    <>
      <div className="specification-details-container">
        <h1 className="specification-name">Sales Package</h1>
        <table className="specification-details">
          {salesPackage.map((salesItem) => (
            <tr>
              <td className="specification-item-title">{salesItem.key}:</td>
              <td className="specification-item-value">{salesItem.value}</td>
            </tr>
          ))}
        </table>
      </div>
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
        <h1 className="specification-name">System Features</h1>
        <table className="specification-details">
          {systemFeatures.map((systemItems) => (
            <tr>
              <td className="specification-item-title">{systemItems.key}:</td>
              <td className="specification-item-value">{systemItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Memory</h1>
        <table className="specification-details">
          {memory.map((memoryItem) => (
            <tr>
              <td className="specification-item-title">{memoryItem.key}:</td>
              <td className="specification-item-value">{memoryItem.value}</td>
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
        <h1 className="specification-name">Graphics</h1>
        <table className="specification-details">
          {graphics.map((graphicItems) => (
            <tr>
              <td className="specification-item-title">{graphicItems.key}:</td>
              <td className="specification-item-value">{graphicItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Webcam</h1>
        <table className="specification-details">
          {webcam.map((webcamItem) => (
            <tr>
              <td className="specification-item-title">{webcamItem.key}:</td>
              <td className="specification-item-value">{webcamItem.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Storage</h1>
        <table className="specification-details">
          {storage.map((storageItem) => (
            <tr>
              <td className="specification-item-title">{storageItem.key}:</td>
              <td className="specification-item-value">{storageItem.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Audio</h1>
        <table className="specification-details">
          {audio.map((audioItems) => (
            <tr>
              <td className="specification-item-title">{audioItems.key}:</td>
              <td className="specification-item-value">{audioItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Power</h1>
        <table className="specification-details">
          {power.map((powerItems) => (
            <tr>
              <td className="specification-item-title">{powerItems.key}:</td>
              <td className="specification-item-value">{powerItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Connectivity</h1>
        <table className="specification-details">
          {connectivity.map((connectivityItems) => (
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
        <h1 className="specification-name">Network</h1>
        <table className="specification-details">
          {network.map((networkItems) => (
            <tr>
              <td className="specification-item-title">{networkItems.key}:</td>
              <td className="specification-item-value">{networkItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Input Devices</h1>
        <table className="specification-details">
          {inputDevices.map((inputDeviceItems) => (
            <tr>
              <td className="specification-item-title">
                {inputDeviceItems.key}:
              </td>
              <td className="specification-item-value">
                {inputDeviceItems.value}
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
        <h1 className="specification-name">Additional Included Software</h1>
        <table className="specification-details">
          {additionalIncludedSoftware.map((AdditionalItems) => (
            <tr>
              <td className="specification-item-title">
                {AdditionalItems.key}:
              </td>
              <td className="specification-item-value">
                {AdditionalItems.value}
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
