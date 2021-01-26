import React,{useState} from "react";
import { CirclePicker } from 'react-color';

const NewColor = React.createContext();

const Color=()=>{
const [background, setBackground] = useState("#fff");

  const handleChange = (color) => {
    setBackground(color.hex);

  };
    return (
      <>
      <NewColor.Provider value={'hi'}>
      <CirclePicker
        color = { background }
        onChange = { handleChange }
      />
      </NewColor.Provider>
      </>
    );

}

export default Color;
export {NewColor};
