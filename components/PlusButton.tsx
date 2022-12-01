import React from 'react'

const PlusButton = () => {
  // const onClick = () => {}
  const [url, setUrl] = React.useState('')
  const onClick = (e: React.SyntheticEvent) => {
    console.log('button')
  }
  const onChange = (e: React.SyntheticEvent) => {
    //@ts-ignore
    console.log(e.target.value)
  }

  return (
    <button onClick={onClick} className="">
      <span>추가!</span>
      <input type="url" onChange={onChange} />
    </button>
  )
}

export default PlusButton
