import React from 'react'

const SiteInput = () => {
  return (
    <form>
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
    </form>
  )
}

export default SiteInput
