"use client";
import React, { useEffect, useState } from "react";
import "./Video.scss";

const LoadVideo = () => {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showVideo && (
        <div className="video-container">
          <video autoPlay muted playsInline className="fade-out">
            <source src="/images/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
};

export default LoadVideo;
