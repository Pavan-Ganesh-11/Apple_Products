import React from "react";
import "./AirPodsProductItem.css";

const LaptopProductItem = (props) => {
  const { airPodsDetails } = props;
  const { general, productDetails, warrenty } = airPodsDetails;
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
          {productDetails.map((productItem) => (
            <tr>
              <td className="specification-item-title">{productItem.key}:</td>
              <td className="specification-item-value">{productItem.value}</td>
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
