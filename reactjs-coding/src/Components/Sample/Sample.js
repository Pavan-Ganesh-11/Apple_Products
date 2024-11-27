import React, { useEffect, useRef } from "react";
import "./Sample.css";

const Sample = () => {
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current) {
      console.log("Started");
      inputRef.current.focus();
      console.log("Ended");
    }
  }, []);

  return (
    <div>
      <input type="text" placeholder="Enter a text" ref={inputRef} />
      <p></p>
    </div>
  );
};

export default Sample;
