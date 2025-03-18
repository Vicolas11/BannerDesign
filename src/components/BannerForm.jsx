import React from 'react';

const BannerForm = ({ bannerState, handleChange }) => {
  return (
    <div className="w-[80%] mx-auto bg-white p-4 shadow-md text-black">
      <h2 className="text-2xl font-bold mb-4">Customize Banner</h2>
      <div className="flex gap-x-4">
        <div className="flex-1 space-y-2">
          <div>
            <label className="block text-sm font-medium mb-1">Background Color</label>
            <input
              type="color"
              name="backgroundColor"
              value={bannerState.backgroundColor}
              onChange={handleChange}
              className="w-full h-10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Text Color</label>
            <input
              type="color"
              name="textColor"
              value={bannerState.textColor}
              onChange={handleChange}
              className="w-full h-10"
            />
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <div>
            <label className="block text-sm font-medium mb-1">Banner Text</label>
            <input
              type="text"
              name="text"
              value={bannerState.text}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={bannerState.imageUrl}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Font Size</label>
          <select
            name="fontSize"
            value={bannerState.fontSize}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="1.5rem">Small</option>
            <option value="2rem">Medium</option>
            <option value="2.5rem">Large</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BannerForm; 