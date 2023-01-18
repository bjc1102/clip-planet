import React from 'react'

import sliceString from '@/utils/sliceString'
import CardMenuBar from '@/components/Card/CardMenuBar'
import { AnimatePresence } from 'framer-motion'

const ClipCard = () => {
  const openInNewTab = (url?: string) => () => {
    window.open('https://github.com/bjc1102', '_blank')?.focus
  }
  const hoverRef = React.useRef<HTMLDivElement>(null)
  const [isHover, setIsHover] = React.useState(false)
  const hoverMouseEvent = (nowHover: boolean) => {
    if (nowHover) return () => setIsHover(true)
    else return () => setIsHover(false)
  }

  return (
    <div
      onClick={openInNewTab()}
      ref={hoverRef}
      onMouseEnter={hoverMouseEvent(true)}
      onMouseLeave={hoverMouseEvent(false)}
      className="group w-full lg:max-w-7xl overflow-hidden hover:cursor-pointer"
    >
      <div className="group-hover:shadow-[inset_0_-55px_75px_-55px_rgba(0,0,0,1)] relative py-20 rounded-lg bg-[url('https://avatars.githubusercontent.com/u/71929440?v=4?s=400')] bg-no-repeat bg-center bg-cover">
        <div className="absolute group-hover:text-white bottom-0 group-hover:transition-opacity duration-500 right-0 px-2 py-2">
          <AnimatePresence>{isHover && <CardMenuBar />}</AnimatePresence>
        </div>
      </div>
      <div className="flex gap-2 items-center pt-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.techinterviewhandbook.org/img/favicon.png"
          alt="site-image"
          className="w-5 h-5 bg-white bg-opacity-0 object-cover rounded-md overflow-clip"
        />
        <h5 className="text-lg font-semibold tracking-tight text-accentColor2 group-hover:text-gray-500">
          {sliceString('github', 30)}
        </h5>
      </div>
      <span className="text-gray-500 group-hover:text-gray-700">
        {sliceString('Noteworthy technology acquisitions 2021', 150)}
      </span>
    </div>
  )
}

export default ClipCard
