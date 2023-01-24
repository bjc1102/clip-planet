import React from 'react'
import { AnimatePresence } from 'framer-motion'

import ClipDeleteButton from '@/components/Card/ClipDeleteButton'
import CardMenuBar from '@/components/Card/CardMenuBar'
import sliceString from '@/utils/sliceString'
import { ClipType } from '@/types/clip'

import validUrl from 'valid-url'
import PlanetIcon from 'public/assets/PlanetIcon'

interface ClipCardProps {
  clip: ClipType
}

const ClipCard = ({ clip }: ClipCardProps) => {
  const hoverRef = React.useRef<HTMLDivElement>(null)
  const [isHover, setIsHover] = React.useState(false)
  const hoverMouseEvent = (nowHover: boolean) => {
    if (nowHover) return () => setIsHover(true)
    else return () => setIsHover(false)
  }

  const openInNewTab = () => () => {
    window.open(clip.ogUrl, '_blank')?.focus
  }

  const checkFavicon = function (url: string) {
    if (!validUrl.isWebUri(url)) {
      return (
        <div className="w-5 h-5 [&>*]:fill-accentColor1">
          <PlanetIcon />
        </div>
      )
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={clip.favicon}
        alt="site-image"
        className="w-5 h-5 bg-white object-cover rounded-full overflow-clip"
      />
    )
  }

  return (
    <div
      onClick={openInNewTab()}
      ref={hoverRef}
      onMouseEnter={hoverMouseEvent(true)}
      onMouseLeave={hoverMouseEvent(false)}
      className="relative group w-full lg:max-w-7xl hover:cursor-pointer"
    >
      <div className="absolute top-[-12px] right-[-12px] z-50 hidden group-hover:block">
        <ClipDeleteButton />
      </div>
      <div
        style={{ backgroundImage: `url(${clip.ogImage})` }}
        className="relative group-hover:shadow-[inset_0_-55px_75px_-55px_rgba(0,0,0,1)] bg-primaryColor2 py-20 rounded-lg bg-no-repeat bg-center bg-cover"
      >
        {!validUrl.isWebUri(clip.ogImage) && (
          <div className="absoluteCenter [&>*]:fill-accentColor1 w-12 h-12">
            <PlanetIcon />
          </div>
        )}
        <div className="absolute group-hover:text-white bottom-0 group-hover:transition-opacity duration-500 right-0 px-2 py-2">
          <AnimatePresence>{isHover && <CardMenuBar />}</AnimatePresence>
        </div>
      </div>
      <div className="flex gap-2 items-center pt-3">
        {checkFavicon(clip.favicon)}
        <h5 className="text-base font-semibold tracking-tight text-accentColor2 group-hover:text-gray-500">
          {sliceString(clip.ogTitle, 25)}
        </h5>
      </div>
      <span className="text-gray-500 group-hover:text-gray-700 text-sm">
        {sliceString(clip.ogDescription, 500)}
      </span>
    </div>
  )
}

export default ClipCard
