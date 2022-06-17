import React from 'react'

interface IStarProps {
  check: boolean
}

const Star: React.FunctionComponent<IStarProps> = (props) => {
  const { check } = props

  return (
    <div className="flex items-center mb-2">
      <div className=" p-1 bg-gray-100 rounded-full text-yellow-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-star"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path
            fill={`${check && '#eab308'}`}
            d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
          />
        </svg>
      </div>
    </div>
  )
}

export default Star
