import React from 'react'
import { NFDesc, NFHeading, NotFoundContainer, NotFoundImage } from './StyledComponent';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt=""
      />
      <NFHeading>Page Not Found</NFHeading>
      <NFDesc>
        OOPS! We are sorry, The page you are redirecting is unavailable.
      </NFDesc>
    </NotFoundContainer>
  );
}

export default NotFound
