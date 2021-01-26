import React, {useRef,useEffect,useState,useContext} from 'react';
import '../assets/css/canvas.module.css';
import Tools from './ToolPanel.jsx';
import {NewColor} from './ColorPicker.jsx';

const Canvas =()=>{
  const canvasRef=useRef(null);
  const contextRef=useRef(null);
  const [drawing,setDrawing]=useState(false);
  const penColor=useContext(NewColor);


  useEffect(()=>{
    prepCanvas();

  },[]);


  const prepCanvas=()=>{
    const canvas=canvasRef.current;
    canvas.width=window.innerWidth*2;
    canvas.height=window.innerHeight*2;
    canvas.style.width=`${window.innerWidth}px`;
    canvas.style.height=`${window.innerHeight}px`;


    const context=canvas.getContext("2d");
    context.scale(2,2);
    context.linecap="round";
    context.strokeStyle="white";
    context.lineWidth=5;
    contextRef.current=context;
  };

  const startDrawing=({nativeEvent})=>{
    setDrawing(true);

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX,offsetY);
  };

  const draw=({nativeEvent})=>{
    if(!drawing){
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.stroke();
    contextRef.current.lineTo(offsetX,offsetY);
  };

  const finishDrawing=()=>{
    contextRef.current.closePath();
    setDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "cadetblue"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }


  return(
          <>
  <div>
    <Tools />
    <canvas
      onMouseDown = { startDrawing }
      onMouseUp = { finishDrawing }
      onMouseMove = { draw }
      ref={canvasRef}
    />
    {penColor}
    <button onClick={clearCanvas}>Clear Canvas</button>
  </div>
</>

  );
}

export default Canvas;
