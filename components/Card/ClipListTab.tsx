import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { UserClipListKey } from 'static/query.key'
import { ClipType } from '@/types/clip'
import useGetClipList from './queries/useGetClipList'

const ClipListTab = () => {
  const { data: clipList } = useGetClipList()

  return (
    <div className="my-16">
      CLIP LiST 입니다
      <span>{clipList?.length}</span>
    </div>
  )
}

export default ClipListTab
