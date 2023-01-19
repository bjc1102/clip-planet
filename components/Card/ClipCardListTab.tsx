import React from 'react'
import useForm from '@/hooks/useForm'
import Input from '@/components/common/Input'
import useSetClip from '@/components/Card/queries/useSetClip'
import { URLType } from '@/types/clip'
import urlValidation from '@/utils/validate'
import { siteURL } from 'static/const'

const ClipCardListTab = () => {
  const { setClip } = useSetClip()
  const { error, handleChange, handleSubmit } = useForm<URLType>({
    initialValue: { siteURL: '' },
    validate: urlValidation,
    onSubmit: ({ siteURL }) => setClip(siteURL),
  })

  console.log('message', error)

  return (
    <div className="my-10">
      <h3 className="inline-block bg-gray-500 p-1.5 rounded-md">
        ClipCardListTab
      </h3>
      <form className="bg-white" onSubmit={handleSubmit}>
        <Input
          label="add-clip"
          type="url"
          onChange={handleChange}
          name={siteURL}
        />
      </form>
    </div>
  )
}

export default ClipCardListTab
