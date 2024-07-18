import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSwitcher = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const images = [
    '/myImage.png',
    '/img1.png',
   
    '/img3.png', 
    '/img4.png',
    '/img5.png',
    '/img6.png',
    '/img7.png',
    '/img8.png',
    '/img9.png',
    '/img10.png', // Add more image paths as needed
  ];

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isHovering) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 200);  // Change image every 100ms
    } else {
      setCurrentImageIndex(0);  // Reset to the first image when not hovering
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isHovering]);

  return (
    <div
      className="relative w-64 h-64"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        src={images[currentImageIndex]}
        alt="dynamic image"
        width={256}
        height={256}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageSwitcher;
