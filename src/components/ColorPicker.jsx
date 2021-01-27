import React, { useState} from "react";
import { CirclePicker } from "react-color";


const Color = () => {
  const [background, setBackground] = useState("#fff");


  const handleChange = (color) => {
    setBackground(color.hex);

  };
  return (
    <>
      <CirclePicker color={background} onChange={handleChange} />
    </>
  );
};

export default Color;
