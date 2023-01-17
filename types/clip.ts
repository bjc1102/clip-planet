export default interface ICard {
  id: string
  title: string
  content: string
  url: string
  isMark: boolean
  date: string
}

export interface ClipType {
  id: number
  ogTitle: string
  ogUrl: string
  ogImage: string
  isMark: boolean
  date: string
}
