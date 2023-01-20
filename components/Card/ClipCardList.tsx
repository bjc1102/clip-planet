import React from 'react'
import ClipCard from '@/components/Card/ClipCard'
import useGetClipList from '@/components/Card/queries/useGetClipList'

const ClipCardList = () => {
  const { clipList } = useGetClipList()

  const clipSpreader = function () {
    return clipList?.map((clip) => {
      return <ClipCard clip={clip} key={clip.id} />
    })
  }

  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 place-items-start max-md:px-4">
      {clipSpreader()}
    </section>
  )
}

export default ClipCardList
