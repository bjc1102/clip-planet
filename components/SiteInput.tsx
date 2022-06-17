import React from 'react'

const SiteInput = () => {
  return (
    <React.Fragment>
      <input
        className="container"
        type="text"
        placeholder="제목"
        maxLength={30}
      />
      <input
        className="container"
        type="text"
        placeholder="사이트 정보"
        maxLength={30}
      />
      <input className="container" type="url" placeholder="사이트 URL" />
    </React.Fragment>
  )
}

export default SiteInput
