export type ChangeTypeOfKeys<T> = {
  [key in keyof T]?: T[key]
}
