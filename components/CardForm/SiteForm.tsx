import React from 'react'

// interface ISiteInputProps {
//   id?: string
// }
type IFormProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>

const SiteForm: React.FunctionComponent<IFormProps> = (props) => {
  const { children, onSubmit } = props

  return (
    <form className="flex flex-col overflow-hidden" onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default SiteForm
