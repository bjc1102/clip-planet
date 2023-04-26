import React from 'react'

export type ChangeTypeOfKeys<T> = {
  [key in keyof T]?: T[key]
}

export type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement>
