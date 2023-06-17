import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const vidref = useRef();
  const [playvideo, setplayvideo] = useState(false);
  const handelvideclick=()=> {
    setplayvideo((prev)=> !prev )
    if(playvideo){
      vidref.current.pause()
    } else {
      vidref.current.play()
    }
  }

 
  return (
    <div className="app__video">
      <video
        ref={vidref}
        src={meal}
        type="video/map4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handelvideclick}></div>
        {playvideo ? (<BsPauseFill color="#fff" fontSize={30}/>) : <BsFillPlayFill color="#fff" fontSize={30}/>}
      </div>
    </div>
  );
};

export default Intro;
