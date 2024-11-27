import React from "react";
import "./LaptopProductItem.css";

const LaptopProductItem = (props) => {
  const { productLaptop } = props;
  const {
    name,
    imageUrl,
    model,
    rating,
    rom,
    price,
    availability,
    hightlights,
    general,
    processorAndMemoryFeatures,
    operatingSystem,
    portAndSlotFeatures,
    displayAndAudioFeatures,
    connectivityFeatures,
    dimensions,
    additionalFeatures,
    warrenty,
  } = productLaptop;
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
        <h1 className="specification-name">Processor And Memory Features</h1>
        <table className="specification-details">
          {processorAndMemoryFeatures.map((processItem) => (
            <tr>
              <td className="specification-item-title">{processItem.key}:</td>
              <td className="specification-item-value">{processItem.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Operating System</h1>
        <table className="specification-details">
          {operatingSystem.map((osItems) => (
            <tr>
              <td className="specification-item-title">{osItems.key}:</td>
              <td className="specification-item-value">{osItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Port And Slot Features</h1>
        <table className="specification-details">
          {portAndSlotFeatures.map((portItems) => (
            <tr>
              <td className="specification-item-title">{portItems.key}:</td>
              <td className="specification-item-value">{portItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Display And Audio Features</h1>
        <table className="specification-details">
          {displayAndAudioFeatures.map((displayItems) => (
            <tr>
              <td className="specification-item-title">{displayItems.key}:</td>
              <td className="specification-item-value">{displayItems.value}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="specification-details-container">
        <h1 className="specification-name">Connectivity Features</h1>
        <table className="specification-details">
          {connectivityFeatures.map((connectionItems) => (
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
        <h1 className="specification-name">Additional Features</h1>
        <table className="specification-details">
          {additionalFeatures.map((addFeatureItems) => (
            <tr>
              <td className="specification-item-title">
                {addFeatureItems.key}:
              </td>
              <td className="specification-item-value">
                {addFeatureItems.value}
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

export default LaptopProductItem;
