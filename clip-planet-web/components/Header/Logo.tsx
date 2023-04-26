import React from 'react'
import PlanetIcon from 'public/assets/PlanetIcon'

const Logo = () => {
  return (
    <a
      href="https://localhost:3000"
      className="flex gap-2 items-center [&>*]:fill-accentColor1 max-md:hidden"
    >
      <div className="w-8 h-8">
        <PlanetIcon />
      </div>
      <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
        ClipPlanet
      </span>
    </a>
  )
}

export default Logo
