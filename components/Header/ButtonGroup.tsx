import React from 'react'

const ButtonGroup = () => {
  return (
    <div className="inline-flex rounded-md shadow-sm " role="group">
      <button
        type="button"
        className="inline-flex items-center py-2 px-4 text-sm font-medium focus:z-10 focus:ring-2 bg-gray-700   border-gray-600   text-white   hover:text-white   hover:bg-gray-600   focus:ring-blue-500   focus:text-white"
      >
        <svg
          className="mr-2 w-4 h-4 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          ></path>
        </svg>
        Marked
      </button>
      <button
        type="button"
        className="inline-flex items-center py-2 px-4 text-sm font-medium focus:z-10 focus:ring-2 bg-gray-700   border-gray-600   text-white   hover:text-white   hover:bg-gray-600   focus:ring-blue-500   focus:text-white"
      >
        <svg
          className="mr-2 w-4 h-4 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
        </svg>
        Setting
      </button>
    </div>
  )
}

export default ButtonGroup
