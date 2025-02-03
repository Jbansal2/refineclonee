import React from 'react';
import '../index.css';

const Annousementbar = () => {
  return (
    <div className=" flex justify-center items-center w-full ">
    <div className="video-container overflow-hidden relative w-full ">
        <video autoPlay loop muted src="/assets/refine-ai-banner.mp4"></video>
    </div>
    <div className="content-container absolute flex justify-center items-center ">
        <img className="w-[250px]" src="/assets/refine-ai-banner-text.png" alt="" />
    </div>
</div>
)
}

export default Annousementbar;
