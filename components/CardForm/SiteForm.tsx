import React from 'react'

// interface ISiteInputProps {
//   id?: string
// }
interface IFormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  type?: '추가' | '수정'
}

const SiteForm: React.FunctionComponent<IFormProps> = (props) => {
  const { children, onSubmit } = props

  return (
    <form
      className="flex flex-col gap-2 my-3 overflow-hidden p-1"
      onSubmit={onSubmit}
    >
      {children}
      <button className="flex-1 border border-accent rounded-lg" type="submit">
        저장
      </button>
    </form>
  )
}

export default SiteForm
