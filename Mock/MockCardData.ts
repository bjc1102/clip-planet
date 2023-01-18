import { ClipType } from '@/types/clip'
import { nanoid } from 'nanoid'
import { getNowDate } from '../utils/getDate'

export const MockCardData: ClipType = {
  id: 1,
  ogTitle: '테스트입니다',
  ogDescription:
    '테스트입니다테스트입니다테스트입니다테스트입니다테스트입니다테스트입니다',
  ogUrl:
    'https://www.google.com/search?q=Mock&oq=Mock&aqs=chrome..69i57j0i131i433i512l4j0i512l2j69i65.1969j0j7&sourceid=chrome&ie=UTF-8',
  ogImage: 'https://choiblog.tistory.com/manage/posts',
  favicon: 'https://github.githubassets.com/favicons/favicon.svg',
  isMark: false,
}
