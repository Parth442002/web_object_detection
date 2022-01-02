import React from 'react'

function HeroSection() {
  return (
    <div className='align-center mt-5 mb-10  mx-20 p-20'>
      <h1 className='text-center text-6xl'>Welcome to
      <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600'> Object Detection</span></h1>
      <div className='text-center text-3xl mt-5'>
        <p>We use
          <spam className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-200 to-red-500' > Tensorflow.js </spam>
          to create an object detection model which uses the Webcam connected to the device to cature real time video of the surroudings and detect objects within the frame.</p>
      </div>
    </div>
  )
}

export default HeroSection
