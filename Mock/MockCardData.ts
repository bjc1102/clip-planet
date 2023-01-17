import { nanoid } from 'nanoid'
import ICard from '../types/Clip'
import { getNowDate } from '../utils/getDate'

export const MockCardData: ICard = {
  id: nanoid(),
  title: '테스트입니다',
  content:
    '테스트입니다테스트입니다테스트입니다테스트입니다테스트입니다테스트입니다',
  url: 'https://www.google.com/search?q=Mock&oq=Mock&aqs=chrome..69i57j0i131i433i512l4j0i512l2j69i65.1969j0j7&sourceid=chrome&ie=UTF-8',
  isMark: false,
  date: getNowDate(),
}
