import ICard from '../types/Card'
import { getNowDate } from '../utils/getDate'

export const MockCardData: ICard = {
  title: '테스트입니다',
  content: '아니 30글자 밖에 안되요? 말이되나 매일 봐야되는데 실화임?',
  url: 'https://www.google.com/search?q=Mock&oq=Mock&aqs=chrome..69i57j0i131i433i512l4j0i512l2j69i65.1969j0j7&sourceid=chrome&ie=UTF-8',
  isMark: false,
  date: getNowDate(),
}
