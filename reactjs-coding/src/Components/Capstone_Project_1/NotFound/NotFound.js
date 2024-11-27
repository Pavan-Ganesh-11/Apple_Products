import React from 'react'
import { NFHeading, NotFoundContainer, NotFoundImage } from './StyledComponent';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt=""
          />
          <NFHeading>Page Not Found</NFHeading>
    </NotFoundContainer>
  );
}

export default NotFound
