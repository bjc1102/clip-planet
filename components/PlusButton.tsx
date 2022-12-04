import Axios from 'lib/axios/instance'
import React from 'react'

const PlusButton = () => {
  // const onClick = () => {}
  const [url, setUrl] = React.useState('')
  const onClick = async (e: React.SyntheticEvent) => {
    console.log(url)
    console.log(await Axios.setSiteInfo(url))
  }
  const onChange = (e: React.SyntheticEvent) => {
    //@ts-ignore
    setUrl(e.target.value)
  }

  return (
    <>
      <button onClick={onClick} className="">
        버튼입니다
      </button>
      <input type="url" onChange={onChange} className="outline" />
    </>
  )
}

export default PlusButton
