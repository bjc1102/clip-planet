import React from 'react'
import ClipCard from '@/components/Card/ClipCard'
import useGetClipList from '@/hooks/queries/Clip/useGetClipList'

const ClipCardList = () => {
  const { clipList } = useGetClipList()

  const clipSpreader = clipList?.map((clip) => {
    return <ClipCard key={clip.id} />
  })

  return (
    <section className="grid grid-cols-4 lg:grid-cols-1 gap-4 place-items-center">
      <ClipCard />
      <ClipCard />
      <ClipCard />
      <ClipCard />
    </section>
  )
}

export default ClipCardList
