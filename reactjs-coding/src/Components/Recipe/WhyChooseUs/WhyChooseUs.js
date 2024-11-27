import React from "react";
import { Card, CardDesc, CardHeading, CardImage } from "./StyledComponents";

const WhyChooseUs = (props) => {
  const { wcuDetails } = props;
  const { cardImageUrl, cardHeading, cardDesc } = wcuDetails;
  const path = require(`../../../Assets/WhyChooseUs/${cardImageUrl}`);

  return (
    <>
      <Card>
        <CardImage src={path} alt={cardHeading}></CardImage>
        <CardHeading>{cardHeading}</CardHeading>
        <CardDesc>{cardDesc}</CardDesc>
      </Card>
    </>
  );
};

export default WhyChooseUs;
