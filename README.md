# Interactive Banner Creator (Microtask)

A modern React application that allows users to create and customize banners with a live preview interface. This tool simplifies the process of creating mediawiki banners with an intuitive user interface.

![Banner](https://github.com/user-attachments/assets/ee34cc7e-3e36-4d91-9c0d-002011c245ef)

## Features

- 🎨 Real-time banner preview
- 🎯 Customizable elements:
  - Background color
  - Text color
  - Banner text content
  - Image URL
  - Font size
- 💫 Smooth transitions and animations
- 📱 Responsive design
- 🎭 Live preview updates

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Vicolas11/BannerDesign.git
cd BannerDesign
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Usage

1. Open the application in your browser
2. Use the customization form on the right to modify the banner:
   - Pick colors using the color pickers
   - Enter your banner text
   - Add an image URL
   - Select the desired font size
3. The banner preview will update in real-time as you make changes

## Project Structure

```
src/
├── components/
│   └── BannerForm.jsx    # Form component for banner customization
├── InteractiveBanner.jsx # Main component with preview and state management
└── App.jsx              # Root component
```

## Technologies Used

- React.js
- Tailwind CSS
- Modern JavaScript (ES6+)
- Vite
