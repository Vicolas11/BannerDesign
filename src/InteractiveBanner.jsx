import React, { useState } from 'react';
import BannerForm from './components/BannerForm';

const InteractiveBanner = () => {
  const [bannerState, setBannerState] = useState({
    backgroundColor: '#4CAF50',
    text: 'Create a tool to simplify creation of mediawiki banners',
    imageUrl: 'https://picsum.photos/800/400',
    textColor: '#ffffff',
    fontSize: '2rem'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBannerState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen w-full">
      {/* Banner */}
      <div
        className="w-full p-4 md:p-6 shadow-md mb-6 transition-all duration-300"
        style={{
          backgroundColor: bannerState.backgroundColor,
          color: bannerState.textColor,
          fontSize: bannerState.fontSize
        }}
      >
        <div className="container mx-auto">
          <img
            src={bannerState.imageUrl}
            alt="Banner"
            className="w-full h-48 md:h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-center text-lg md:text-xl" style={{ fontSize: bannerState.fontSize }}>{bannerState.text}</p>
        </div>
      </div>

      {/* Control Form */}
      <BannerForm bannerState={bannerState} handleChange={handleChange} />
    </div>
  );
};

export default InteractiveBanner; 