import React from 'react'
import Image from 'next/image'

function TopBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap  bg-clip-content bg-gradient-to-br from-green-400 to-blue-600">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <Image
    className="fill-current h-8 w-8 mr-2"
    src="/webobject-logo.png"
    alt="Picture of the author"
    width="84"
    height="84"
    />
    <span className="font-semibold text-xl ml-5 tracking-tight">Object Detection</span>
  </div>
</nav>
  )
}

export default TopBar
