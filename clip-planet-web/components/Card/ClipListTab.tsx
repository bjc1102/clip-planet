import React from 'react'
import useGetClipList from './queries/useGetClipList'

const ClipListTab = () => {
  const { data: clipList } = useGetClipList()

  return (
    <div className="my-16 max-lg:px-4 text-white text-lg">
      총 {clipList?.length}개의 클립이 있습니다!
    </div>
  )
}

export default ClipListTab
